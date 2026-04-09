'use client'
import { Suspense, useRef, useState } from "react";
import { useSearchParams } from 'next/navigation';
import { Editor, Preview } from "../comp/preview";
import { parseCodeToJson } from '../utils/jsonParsing';
import { templates } from '../templates/registry';
import { SiteHeader } from "../comp/site-header";
import { convertToReactStyles } from "../utils/design";

type ParsedContentItem = {
  type: string;
  value?: string;
};

type ParsedElement = {
  type: string;
  content: ParsedContentItem[];
  styles: Record<string, string>;
  isInline: boolean;
  src?: string | null;
  url: string | null;
  layout: string | null;
  gap: string | null;
};

type ParsedResume = {
  pageStyles?: Record<string, string>;
  elements: ParsedElement[];
};

const toKebabCase = (value: string) => value.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const styleObjectToString = (styles: Record<string, string>) =>
  Object.entries(styles)
    .filter(([, value]) => value !== undefined && value !== null && value !== '')
    .map(([key, value]) => `${toKebabCase(key)}:${value}`)
    .join(';');

const toReactStyleMap = (
  styles?: Record<string, string | number | null | undefined>
): Record<string, string> =>
  convertToReactStyles((styles ?? {}) as unknown as Record<string, string>) as Record<string, string>;

const groupRenderSections = (elements: ParsedElement[]) => {
  const columnStyleMap: Record<string, string> = {
    backgroundColor: 'columnBackgroundColor',
    padding: 'columnPadding',
    paddingTop: 'columnPaddingTop',
    paddingBottom: 'columnPaddingBottom',
    paddingLeft: 'columnPaddingLeft',
    paddingRight: 'columnPaddingRight',
    borderWidth: 'columnBorderWidth',
    borderColor: 'columnBorderColor',
    borderRadius: 'columnBorderRadius',
  };
  const sections: Array<
    | { type: 'elements'; elements: ParsedElement[] }
    | {
        type: 'columns';
        columns: Array<{
          name: string;
          width: string | null;
          styles: Record<string, string | null>;
          elements: ParsedElement[];
        }>;
        gap: string;
      }
  > = [];

  for (let index = 0; index < elements.length; index += 1) {
    const element = elements[index];
    const columnName = element.styles?.column;

    if (!columnName) {
      sections.push({ type: 'elements', elements: [element] });
      continue;
    }

    const columnElements: ParsedElement[] = [];

    while (index < elements.length && elements[index].styles?.column) {
      columnElements.push(elements[index]);
      index += 1;
    }

    index -= 1;

    const columns: Array<{ name: string; width: string | null; styles: Record<string, string | null>; elements: ParsedElement[] }> = [];
    const byName = new Map<string, { name: string; width: string | null; styles: Record<string, string | null>; elements: ParsedElement[] }>();

    columnElements.forEach((columnElement) => {
      const name = columnElement.styles.column;
      if (!byName.has(name)) {
        const columnConfig = {
          name,
          width: columnElement.styles.columnWidth || null,
          styles: {
            backgroundColor: columnElement.styles.columnBackgroundColor || null,
            padding: columnElement.styles.columnPadding || null,
            paddingTop: columnElement.styles.columnPaddingTop || null,
            paddingBottom: columnElement.styles.columnPaddingBottom || null,
            paddingLeft: columnElement.styles.columnPaddingLeft || null,
            paddingRight: columnElement.styles.columnPaddingRight || null,
            borderWidth: columnElement.styles.columnBorderWidth || null,
            borderColor: columnElement.styles.columnBorderColor || null,
            borderRadius: columnElement.styles.columnBorderRadius || null,
          },
          elements: [],
        };
        byName.set(name, columnConfig);
        columns.push(columnConfig);
      }
      const columnConfig = byName.get(name);
      if (!columnConfig) {
        return;
      }
      if (!columnConfig.width && columnElement.styles.columnWidth) {
        columnConfig.width = columnElement.styles.columnWidth;
      }
      Object.entries(columnStyleMap).forEach(([styleKey, elementKey]) => {
        if (!columnConfig.styles[styleKey] && columnElement.styles[elementKey]) {
          columnConfig.styles[styleKey] = columnElement.styles[elementKey];
        }
      });
      columnConfig.elements.push(columnElement);
    });

    const columnGap = columnElements.find((columnElement) => columnElement.styles?.columnGap)?.styles?.columnGap || '24';
    sections.push({ type: 'columns', columns, gap: columnGap });
  }

  const mergedSections: typeof sections = [];
  sections.forEach((section) => {
    const previousSection = mergedSections[mergedSections.length - 1];
    if (section.type === 'elements' && previousSection?.type === 'elements') {
      previousSection.elements.push(...section.elements);
    } else {
      mergedSections.push(section);
    }
  });

  return mergedSections;
};

const renderContentItem = (item: ParsedContentItem) => {
  if (item.type === 'text') return `<span>${escapeHtml(item.value || '')}</span>`;
  if (item.type === 'headline') return `<span class="preview-headline-inline">${escapeHtml(item.value || '')}</span>`;
  if (item.type === 'strong') return `<strong>${escapeHtml(item.value || '')}</strong>`;
  if (item.type === 'muted') return `<span class="preview-muted">${escapeHtml(item.value || '')}</span>`;
  if (item.type === 'badge') return `<span class="preview-badge">${escapeHtml(item.value || '')}</span>`;
  if (item.type === 'dot') return `<span class="dot">•</span>`;
  if (item.type === 'pipe') return `<span class="preview-pipe">|</span>`;
  if (item.type === 'break') return '<br />';
  return '';
};

const renderElementHtml = (element: ParsedElement) => {
  const style = styleObjectToString(toReactStyleMap(element.styles));
  const hangingIndent = element.styles?.hangingIndent;
  const hasBulletDot = (element.content || []).some((item) => item.type === 'dot');

  if (element.type === 'hr') {
    const hrStyle = `${style};border:none;border-bottom-style:solid;border-color:${element.styles?.color || 'black'};width:100%;margin-top:1em;margin-bottom:1em;`;
    return `<hr style="${hrStyle}" />`;
  }

  if (element.type === 'vr') {
    const barStyle = `${style};width:${element.styles?.width ? (/^\d+(\.\d+)?$/.test(String(element.styles.width)) ? `${element.styles.width}px` : element.styles.width) : '4px'};height:${element.styles?.height ? (/^\d+(\.\d+)?$/.test(String(element.styles.height)) ? `${element.styles.height}px` : element.styles.height) : '72px'};background-color:${element.styles?.color || '#111111'};flex-shrink:0;`;
    return `<div style="${barStyle}"></div>`;
  }

  if (element.type === 'img') {
    const imageStyle = style ? `display:block;max-width:100%;${style}` : 'display:block;max-width:100%;';
    const imageHtml = `<img src="${escapeHtml(element.src || '')}" alt="${escapeHtml(element.styles?.alt || 'Resume image')}" style="${imageStyle}" />`;
    if (element.url) {
      return `<a href="${escapeHtml(element.url)}" target="_blank" rel="noopener noreferrer" style="text-decoration:none">${imageHtml}</a>`;
    }
    return imageHtml;
  }

  const content = hangingIndent && hasBulletDot
    ? (() => {
        const dotIndex = element.content.findIndex((item) => item.type === 'dot');
        const beforeDot = element.content.slice(0, dotIndex).map(renderContentItem).join('');
        const afterDot = element.content.slice(dotIndex + 1).map(renderContentItem).join('');
        const indentValue = /^\d+(\.\d+)?$/.test(String(hangingIndent)) ? `${hangingIndent}px` : String(hangingIndent);
        return `<div class="preview-element preview-hanging-indent" style="${style}">${beforeDot ? `<div class="preview-inline-prefix">${beforeDot}</div>` : ''}<div class="preview-hanging-row"><span class="dot preview-hanging-dot" style="width:${indentValue};min-width:${indentValue}">•</span><div class="preview-hanging-text">${afterDot}</div></div></div>`;
      })()
    : `<div class="preview-element" style="${style}">${(element.content || []).map(renderContentItem).join('')}</div>`;

  if (element.url) {
    return `<a href="${escapeHtml(element.url)}" target="_blank" rel="noopener noreferrer" style="text-decoration:none">${content}</a>`;
  }

  return content;
};

const renderHtmlDocument = (parsedJson: ParsedResume) => {
  const renderLineGroups = (elements: ParsedElement[]) => {
    const groupedLines = elements.reduce((acc: ParsedElement[][], element: ParsedElement) => {
      if (element.isInline && acc.length > 0) {
        acc[acc.length - 1].push(element);
      } else {
        acc.push([element]);
      }
      return acc;
    }, []);

    const justifyContentMap: Record<string, string> = {
      start: 'flex-start',
      center: 'center',
      end: 'flex-end',
      between: 'space-between',
      around: 'space-around',
    };
    const alignItemsMap: Record<string, string> = {
      start: 'flex-start',
      center: 'center',
      end: 'flex-end',
      baseline: 'baseline',
    };

    return groupedLines.map((lineGroup) => {
      if (lineGroup.length === 1) {
        return renderElementHtml(lineGroup[0]);
      }

      const lineLayout = lineGroup.find((element) => element.layout)?.layout || 'between';
      const lineGap = lineGroup.find((element) => element.gap)?.gap || '0';
      const lineAlign = lineGroup.find((element) => element.styles?.columnAlign)?.styles?.columnAlign || 'baseline';
      const normalizedGap = /^\d+(\.\d+)?$/.test(String(lineGap)) ? `${lineGap}px` : lineGap;

      return `<div style="display:flex;justify-content:${justifyContentMap[lineLayout] || 'space-between'};align-items:${alignItemsMap[lineAlign] || 'baseline'};gap:${normalizedGap};flex-wrap:wrap">${lineGroup.map(renderElementHtml).join('')}</div>`;
    }).join('');
  };

  const renderSections = groupRenderSections(parsedJson.elements);
  const html = renderSections.map((section) => {
    if (section.type === 'columns') {
      const normalizedGap = /^\d+(\.\d+)?$/.test(String(section.gap)) ? `${section.gap}px` : section.gap;
      const hasRemainingHeight = section.columns.some((column) =>
        column.elements.some((element) => element.styles?.height === 'remaining')
      );
      const columnsHtml = section.columns.map((column) => {
        const width = column.width || '1fr';
        const normalizedWidth = /^\d+(\.\d+)?$/.test(String(width)) ? `${width}px` : width;
        const isFixedWidth = /^\d+(\.\d+)?(px)?$/.test(String(width));
        const containerStyle = styleObjectToString(toReactStyleMap({
          backgroundColor: column.styles.backgroundColor || '',
          padding: column.styles.padding || '',
          paddingTop: column.styles.paddingTop || '',
          paddingBottom: column.styles.paddingBottom || '',
          paddingLeft: column.styles.paddingLeft || '',
          paddingRight: column.styles.paddingRight || '',
          borderWidth: column.styles.borderWidth || '',
          borderColor: column.styles.borderColor || '',
          borderRadius: column.styles.borderRadius || '',
        }));
        const columnStyle = width === '1fr'
          ? `flex:1;min-width:0;display:flex;flex-direction:column;${containerStyle}`
          : isFixedWidth
            ? `width:${normalizedWidth};min-width:0;flex-shrink:0;display:flex;flex-direction:column;${containerStyle}`
            : `flex-basis:${normalizedWidth};min-width:0;flex-shrink:1;display:flex;flex-direction:column;${containerStyle}`;
        return `<div style="${columnStyle}">${renderLineGroups(column.elements)}</div>`;
      }).join('');
      return `<div style="display:flex;align-items:stretch;gap:${normalizedGap};${hasRemainingHeight ? 'flex:1;min-height:0;' : ''}">${columnsHtml}</div>`;
    }

    return renderLineGroups(section.elements);
  }).join('');

  const pageStyle = styleObjectToString(toReactStyleMap(parsedJson.pageStyles));

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>codeResume export</title>
    <style>
      body { margin: 0; padding: 32px; background: #f8fafc; font-family: Arial, sans-serif; }
      .page { max-width: 860px; margin: 0 auto; background: white; padding: 28px; box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08); }
      .preview-content { color: #111827; font-family: Arial, sans-serif; font-size: 14px; line-height: 1.45; min-height: 100%; display: flex; flex-direction: column; }
      .preview-element .dot { margin-right: 8px; font-weight: 700; }
      .preview-muted { color: #64748b; }
      .preview-headline-inline { display:inline-block; font-family: Arial, Helvetica, sans-serif; font-size: 22px; font-weight: 700; line-height: 1.1; margin-bottom: 4px; }
      .preview-badge { display: inline-block; padding: 4px 10px; margin-right: 8px; margin-bottom: 6px; border-radius: 999px; background: #e2e8f0; color: #0f172a; font-size: 12px; font-weight: 600; }
      .preview-pipe { color: #94a3b8; margin: 0 8px; }
      .preview-hanging-row { display:flex; align-items:flex-start; }
      .preview-hanging-dot { display:inline-block; flex-shrink:0; }
      .preview-hanging-text { flex:1; min-width:0; }
      strong { font-weight: 700; }
    </style>
  </head>
  <body>
    <div class="page">
      <div class="preview-content" style="${pageStyle}">${html}</div>
    </div>
  </body>
</html>`;
};

function EditorContent() {
  const searchParams = useSearchParams();
  const templateKey = searchParams.get('template') || 'full';

  const initialCode = templates[templateKey as keyof typeof templates] || templates.full;
  const initialParsedJson = parseCodeToJson(initialCode);

  const [code, setCode] = useState(initialCode);
  const [parsedJson, setParsedJson] = useState<ParsedResume>(initialParsedJson);
  const imageInputRef = useRef<HTMLInputElement | null>(null);

  const compileCode = (nextCode: string) => {
    const result = parseCodeToJson(nextCode) as ParsedResume;
    setParsedJson(result);
    return result;
  };

  const downloadFile = (filename: string, content: string, mimeType: string) => {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = filename;
    anchor.click();
    URL.revokeObjectURL(url);
  };

  const handleCompile = () => {
    compileCode(code);
  };

  const handleExportJson = () => {
    const result = compileCode(code);
    downloadFile('resume.json', JSON.stringify(result, null, 2), 'application/json');
  };

  const handleExportDsl = () => {
    downloadFile('resume.coderesume.txt', code, 'text/plain;charset=utf-8');
  };

  const handleExportHtml = () => {
    const result = compileCode(code);
    downloadFile('resume.html', renderHtmlDocument(result), 'text/html;charset=utf-8');
  };

  const handleExportPdf = () => {
    compileCode(code);
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        window.print();
      });
    });
  };

  const createImageVariableName = (filename: string) => {
    const normalizedBase = filename
      .replace(/\.[^.]+$/, '')
      .replace(/[^A-Za-z0-9]+/g, '_')
      .replace(/^(\d)/, '_$1')
      .replace(/^_+|_+$/g, '') || 'uploaded_image';

    let candidate = normalizedBase;
    let suffix = 1;
    while (new RegExp(`declare\\s+${candidate}\\s*=`).test(code)) {
      suffix += 1;
      candidate = `${normalizedBase}_${suffix}`;
    }

    return candidate;
  };

  const handleOpenImageUpload = () => {
    imageInputRef.current?.click();
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      if (typeof result !== 'string') {
        return;
      }

      const variableName = createImageVariableName(file.name);
      const declarationLine = `declare ${variableName}="${result}"`;
      const lines = code.split('\n');
      let declarationInsertIndex = 0;

      while (declarationInsertIndex < lines.length && lines[declarationInsertIndex].trim().startsWith('declare ')) {
        declarationInsertIndex += 1;
      }

      lines.splice(declarationInsertIndex, 0, declarationLine, '');

      const imageSnippet = [
        'start',
        `image "$${variableName}"`,
        `set alt "${file.name.replace(/"/g, '') || 'Uploaded image'}"`,
        'set width "96"',
        'set height "96"',
        'set borderRadius "999"',
        'set fit "cover"',
        'end',
      ].join('\n');

      const updatedCode = `${lines.join('\n').replace(/\s*$/, '')}\n\n${imageSnippet}\n`;
      setCode(updatedCode);
      compileCode(updatedCode);
      event.target.value = '';
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="app-root">
      <div className="container">
        <div style={{ marginBottom: '24px' }}>
          <SiteHeader showLaunchButton={false} />
        </div>

        <div className="grid editor-grid">
          <div className="panel panel-left editor-panel">
            <div className="editor-toolbar">
              <button onClick={handleCompile} className="compile-btn">
                Compile
              </button>
              <div className="export-row">
                <button onClick={handleOpenImageUpload} className="secondary-action-btn">
                  Upload Image
                </button>
                <button onClick={handleExportPdf} className="secondary-action-btn">
                  Export PDF
                </button>
                <button onClick={handleExportHtml} className="secondary-action-btn">
                  Export HTML
                </button>
                <button onClick={handleExportJson} className="secondary-action-btn">
                  Export JSON
                </button>
                <button onClick={handleExportDsl} className="secondary-action-btn">
                  Export TXT
                </button>
              </div>
              <input
                ref={imageInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: 'none' }}
              />
            </div>

            <div className="editor-wrap">
              <Editor code={code} setCode={setCode} />
            </div>
          </div>

          <div className="panel panel-right preview-panel">
            <div className="preview-panel-head">
              <div>
                <p className="eyebrow">Preview</p>
                <h2>Ready for export</h2>
              </div>
              <p className="preview-panel-copy">
                PDF uses your browser print dialog. HTML, JSON, and TXT download directly.
              </p>
            </div>
            <div className="paper print-paper">
              <Preview parsedJson={parsedJson} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EditorPage() {
  return (
    <Suspense fallback={<div style={{ color: 'white', padding: '50px' }}>Loading Editor...</div>}>
      <EditorContent />
    </Suspense>
  );
}
