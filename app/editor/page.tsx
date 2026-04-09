'use client'
import { Suspense, useState } from "react";
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
  url: string | null;
  layout: string | null;
  gap: string | null;
};

type ParsedResume = {
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
    .map(([key, value]) => `${toKebabCase(key)}:${value}`)
    .join(';');

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
  const style = styleObjectToString(convertToReactStyles(element.styles || {}));

  if (element.type === 'hr') {
    const hrStyle = `${style};border:none;border-bottom-style:solid;border-color:${element.styles?.color || 'black'};width:100%;margin-top:1em;margin-bottom:1em;`;
    return `<hr style="${hrStyle}" />`;
  }

  if (element.type === 'vr') {
    const barStyle = `${style};width:${element.styles?.width ? (/^\d+(\.\d+)?$/.test(String(element.styles.width)) ? `${element.styles.width}px` : element.styles.width) : '4px'};height:${element.styles?.height ? (/^\d+(\.\d+)?$/.test(String(element.styles.height)) ? `${element.styles.height}px` : element.styles.height) : '72px'};background-color:${element.styles?.color || '#111111'};flex-shrink:0;`;
    return `<div style="${barStyle}"></div>`;
  }

  const content = `<div class="preview-element" style="${style}">${(element.content || []).map(renderContentItem).join('')}</div>`;

  if (element.url) {
    return `<a href="${escapeHtml(element.url)}" target="_blank" rel="noopener noreferrer" style="text-decoration:none">${content}</a>`;
  }

  return content;
};

const renderHtmlDocument = (parsedJson: ParsedResume) => {
  const groupedLines = parsedJson.elements.reduce((acc: ParsedElement[][], element: ParsedElement) => {
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

  const html = groupedLines.map((lineGroup) => {
    if (lineGroup.length === 1) {
      return renderElementHtml(lineGroup[0]);
    }

    const lineLayout = lineGroup.find((element) => element.layout)?.layout || 'between';
    const lineGap = lineGroup.find((element) => element.gap)?.gap || '0';
    const normalizedGap = /^\d+(\.\d+)?$/.test(String(lineGap)) ? `${lineGap}px` : lineGap;

    return `<div style="display:flex;justify-content:${justifyContentMap[lineLayout] || 'space-between'};align-items:baseline;gap:${normalizedGap};flex-wrap:wrap">${lineGroup.map(renderElementHtml).join('')}</div>`;
  }).join('');

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>codeResume export</title>
    <style>
      body { margin: 0; padding: 32px; background: #f8fafc; font-family: Arial, sans-serif; }
      .page { max-width: 860px; margin: 0 auto; background: white; padding: 28px; box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08); }
      .preview-content { color: #111827; font-family: Arial, sans-serif; font-size: 14px; line-height: 1.45; }
      .preview-element .dot { margin-right: 8px; font-weight: 700; }
      .preview-muted { color: #64748b; }
      .preview-headline-inline { display:inline-block; font-family: Arial, Helvetica, sans-serif; font-size: 22px; font-weight: 700; line-height: 1.1; margin-bottom: 4px; }
      .preview-badge { display: inline-block; padding: 4px 10px; margin-right: 8px; margin-bottom: 6px; border-radius: 999px; background: #e2e8f0; color: #0f172a; font-size: 12px; font-weight: 600; }
      .preview-pipe { color: #94a3b8; margin: 0 8px; }
      strong { font-weight: 700; }
    </style>
  </head>
  <body>
    <div class="page">
      <div class="preview-content">${html}</div>
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
