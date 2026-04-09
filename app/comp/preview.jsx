'use client'
import React from 'react';
// import { convertToReactStyles } from "../../../codeResume/client/src/utils/design";
import { convertToReactStyles } from "../utils/design";

/**
 * A helper component to render a single element.
 * This avoids code duplication and makes the main component cleaner.
 */
const ElementRenderer = ({ element, disableLinks }) => {
  const style = convertToReactStyles(element.styles || {});
  const hangingIndent = element.styles?.hangingIndent;
  const hasBulletDot = element.content?.some((item) => item.type === 'dot');

  // Handle HR tags separately
  if (element.type === 'hr') {
    const hrStyle = {
      ...style,
      border: 'none', // Reset default border
      borderBottomStyle: 'solid',
      borderColor: style.color || 'black',
      width: '100%',
      marginTop: '1em',
      marginBottom: '1em',
    };
    return <hr style={hrStyle} />;
  }

  if (element.type === 'vr') {
    const barStyle = {
      ...style,
      width: style.width || '4px',
      height: style.height || '72px',
      backgroundColor: style.color || '#111111',
      flexShrink: 0,
    };
    return <div style={barStyle} className="preview-vertical-bar" />;
  }

  const renderContentItem = (item, i) => {
    if (item.type === 'text') return <span key={i}>{item.value}</span>;
    if (item.type === 'headline') return <span key={i} className="preview-headline-inline">{item.value}</span>;
    if (item.type === 'strong') return <strong key={i} className="preview-strong">{item.value}</strong>;
    if (item.type === 'muted') return <span key={i} className="preview-muted">{item.value}</span>;
    if (item.type === 'badge') return <span key={i} className="preview-badge">{item.value}</span>;
    if (item.type === 'dot') return <span key={i} className="dot">•</span>;
    if (item.type === 'pipe') return <span key={i} className="preview-pipe">|</span>;
    if (item.type === 'break') return <br key={i} />;
    return null;
  };

  const content = hangingIndent && hasBulletDot ? (() => {
    const dotIndex = element.content.findIndex((item) => item.type === 'dot');
    const beforeDot = element.content.slice(0, dotIndex);
    const afterDot = element.content.slice(dotIndex + 1);
    const indentValue = /^\d+(\.\d+)?$/.test(String(hangingIndent)) ? `${hangingIndent}px` : hangingIndent;

    return (
      <div style={style} className="preview-element preview-hanging-indent">
        {beforeDot.length > 0 ? (
          <div className="preview-inline-prefix">
            {beforeDot.map(renderContentItem)}
          </div>
        ) : null}
        <div className="preview-hanging-row">
          <span className="dot preview-hanging-dot" style={{ width: indentValue, minWidth: indentValue }}>•</span>
          <div className="preview-hanging-text">
            {afterDot.map((item, i) => renderContentItem(item, i + dotIndex + 1))}
          </div>
        </div>
      </div>
    );
  })() : (
    <div style={style} className="preview-element">
      {element.content?.map(renderContentItem)}
    </div>
  );

  // If the element has a URL, wrap it in an anchor tag unless disabled
  if (element.url && !disableLinks) {
    return <a href={element.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>{content}</a>;
  }

  return content;
};

const renderLineGroups = (elements, disableLinks) => {
  const groupedLines = elements.reduce((acc, element) => {
    if (element.isInline && acc.length > 0) {
      acc[acc.length - 1].push(element);
    } else {
      acc.push([element]);
    }
    return acc;
  }, []);

  return groupedLines.map((lineGroup, index) => {
    const lineLayout = lineGroup.find((element) => element.layout)?.layout || 'between';
    const lineGap = lineGroup.find((element) => element.gap)?.gap || '0';
    const lineAlign = lineGroup.find((element) => element.styles?.columnAlign)?.styles?.columnAlign || 'baseline';
    const justifyContentMap = {
      start: 'flex-start',
      center: 'center',
      end: 'flex-end',
      between: 'space-between',
      around: 'space-around',
    };
    const alignItemsMap = {
      start: 'flex-start',
      center: 'center',
      end: 'flex-end',
      baseline: 'baseline',
    };

    if (lineGroup.length > 1) {
      return (
        <div
          key={index}
          style={{
            display: 'flex',
            justifyContent: justifyContentMap[lineLayout] || 'space-between',
            alignItems: alignItemsMap[lineAlign] || 'baseline',
            gap: /^\d+$/.test(String(lineGap)) ? `${lineGap}px` : lineGap,
            flexWrap: 'wrap',
          }}
        >
          {lineGroup.map((element, elIndex) => (
            <ElementRenderer key={elIndex} element={element} disableLinks={disableLinks} />
          ))}
        </div>
      );
    }

    return <ElementRenderer key={index} element={lineGroup[0]} disableLinks={disableLinks} />;
  });
};

const groupRenderSections = (elements) => {
  const sections = [];
  const columnStyleMap = {
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

  for (let index = 0; index < elements.length; index += 1) {
    const element = elements[index];
    const columnName = element.styles?.column;

    if (!columnName) {
      sections.push({ type: 'elements', elements: [element] });
      continue;
    }

    const columnElements = [];

    while (index < elements.length && elements[index].styles?.column) {
      columnElements.push(elements[index]);
      index += 1;
    }

    index -= 1;

    const columns = [];
    const byName = new Map();

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

  const mergedSections = [];
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

export const Preview = ({ parsedJson, disableLinks = false }) => {
  if (!parsedJson || !parsedJson.elements || parsedJson.elements.length === 0) {
    return (
      <div className="preview-empty">
        Output will be rendered here...
      </div>
    );
  }

  const pageStyle = convertToReactStyles(parsedJson.pageStyles || {});
  const renderSections = groupRenderSections(parsedJson.elements);
  const previewContentStyle = {
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    ...pageStyle,
  };

  return (
    <div className="preview-content" style={previewContentStyle}>
      {renderSections.map((section, sectionIndex) => {
        if (section.type === 'columns') {
          const normalizedGap = /^\d+$/.test(String(section.gap)) ? `${section.gap}px` : section.gap;
          const hasRemainingHeight = section.columns.some((column) =>
            column.elements.some((element) => element.styles?.height === 'remaining')
          );
          return (
            <div
              key={sectionIndex}
              className="preview-columns"
              style={{
                display: 'flex',
                alignItems: 'stretch',
                gap: normalizedGap,
                ...(hasRemainingHeight ? { flex: 1, minHeight: 0 } : {}),
              }}
            >
              {section.columns.map((column) => {
                const width = column.width || '1fr';
                const normalizedWidth = /^\d+$/.test(String(width)) ? `${width}px` : width;
                const isFixedWidth = /^\d+(\.\d+)?(px)?$/.test(String(width));
                const columnStyle = {
                  ...(width === '1fr'
                    ? { flex: 1, minWidth: 0 }
                    : isFixedWidth
                      ? { width: normalizedWidth, minWidth: 0, flexShrink: 0 }
                      : { flexBasis: normalizedWidth, minWidth: 0, flexShrink: 1 }),
                  display: 'flex',
                  flexDirection: 'column',
                  ...convertToReactStyles({
                    backgroundColor: column.styles.backgroundColor,
                    padding: column.styles.padding,
                    paddingTop: column.styles.paddingTop,
                    paddingBottom: column.styles.paddingBottom,
                    paddingLeft: column.styles.paddingLeft,
                    paddingRight: column.styles.paddingRight,
                    borderWidth: column.styles.borderWidth,
                    borderColor: column.styles.borderColor,
                    borderRadius: column.styles.borderRadius,
                  }),
                };
                return (
                  <div key={column.name} className="preview-column" style={columnStyle}>
                    {renderLineGroups(column.elements, disableLinks)}
                  </div>
                );
              })}
            </div>
          );
        }

        return (
          <React.Fragment key={sectionIndex}>
            {renderLineGroups(section.elements, disableLinks)}
          </React.Fragment>
        );
      })}
    </div>
  );
};

// export const Editor = ({ code, setCode }) => {
//   return (
//     <textarea
//       value={code}
//       onChange={(e) => setCode(e.target.value)}
//       className="code-area"
//       placeholder="Enter your script here..."
//     />
//   );
// };

// export const Editor = ({ code, setCode }) => {
//   const editorRef = useRef(null);

//   const highlightSyntax = (text) => {
//     let highlightedText = text
//       .replace(/"(.*?)"/g, '<span class="string">"$1"</span>') // Strings
//       .replace(/\b(start|end|startFromSameLine)\b/g, '<span class="keyword-block">$1</span>') // Block keywords
//       .replace(/\b(init|set|write|design|set_url|draw|add)\b/g, '<span class="keyword-command">$1</span>'); // Command keywords

//     return highlightedText.replace(/\n/g, '<br/>');
//   };

//   const handleInput = (e) => {
//     setCode(e.currentTarget.innerText);
//   };

//   // This effect synchronizes the div content with the state,
//   // especially important for initial load and external changes.
//   useEffect(() => {
//     if (editorRef.current && editorRef.current.innerText !== code) {
//        editorRef.current.innerHTML = highlightSyntax(code);
//     }
//   }, [code]);

//   return (
//     <>
//       <style>{`
//         .code-editor {
//           width: 100%;
//           height: 100%;
//           min-height: 0;
//           background: #1a202c; /* bg-gray-900 */
//           color: #f6ad55; /* Light yellowish orange */
//           border: 2px solid #4a5568; /* border-gray-700 */
//           padding: 1rem;
//           border-radius: 0.5rem;
//           resize: none;
//           font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono", "Courier New", monospace;
//           font-size: 14px;
//           line-height: 1.5;
//           overflow: auto;
//           white-space: pre-wrap; /* Allows wrapping and preserves spaces */
//         }
//         .code-editor:focus {
//           outline: none;
//           border-color: #48bb78; /* focus:border-green-500 */
//         }
//         .keyword-block {
//           color: white;
//           font-weight: bold;
//         }
//         .keyword-command {
//           color: #D2B48C; /* Tan - a chocolaty brown */
//         }
//         .string {
//           color: #90cdf4; /* A light blue for strings */
//         }
//       `}</style>
//       <div
//         ref={editorRef}
//         contentEditable={true}
//         onInput={handleInput}
//         className="code-editor flex-grow"
//         spellCheck="false"
//       />
//     </>
//   );
// };


// export const Editor = ({ code, setCode }) => {
//   const editorRef = useRef(null);

//   const highlightSyntax = (text) => {
//     // Escape HTML to prevent injection before applying spans
//     const escapedText = text
//         .replace(/&/g, "&amp;")
//         .replace(/</g, "&lt;")
//         .replace(/>/g, "&gt;");

//     let highlightedText = escapedText
//       .replace(/"(.*?)"/g, '<span class="string">"$1"</span>') // Strings
//       .replace(/\b(start|end|startFromSameLine)\b/g, '<span class="keyword-block">$1</span>') // Block keywords
//       .replace(/\b(init|set|write|design|set_url|draw|add)\b/g, '<span class="keyword-command">$1</span>'); // Command keywords

//     return highlightedText.replace(/\n/g, '<br/>');
//   };

//   const handleInput = (e) => {
//     setCode(e.currentTarget.innerText);
//   };

//   // This effect synchronizes the div content with the state,
//   // handling updates from typing and pasting while preserving cursor position.
//   useEffect(() => {
//     if (editorRef.current) {
//       const currentText = editorRef.current.innerText;
//       if (currentText === code) {
//         return; // Avoid re-rendering if the plain text is already in sync
//       }

//       // --- Save Cursor Position ---
//       const selection = window.getSelection();
//       const range = selection.rangeCount > 0 ? selection.getRangeAt(0) : null;
//       let charCount = -1;
//       if (range) {
//         const preCaretRange = range.cloneRange();
//         preCaretRange.selectNodeContents(editorRef.current);
//         preCaretRange.setEnd(range.endContainer, range.endOffset);
//         charCount = preCaretRange.toString().length;
//       }

//       // --- Update Content ---
//       editorRef.current.innerHTML = highlightSyntax(code);

//       // --- Restore Cursor Position ---
//       if (charCount !== -1) {
//         let newRange = document.createRange();
//         let charCounter = 0;
//         let found = false;

//         const findNodeAndOffset = (node) => {
//           if (found) return;
//           if (node.nodeType === Node.TEXT_NODE) {
//             const nextCharCounter = charCounter + node.length;
//             if (charCount <= nextCharCounter) {
//               newRange.setStart(node, charCount - charCounter);
//               newRange.collapse(true);
//               found = true;
//             } else {
//               charCounter = nextCharCounter;
//             }
//           } else {
//             for (const child of node.childNodes) {
//               findNodeAndOffset(child);
//             }
//           }
//         };

//         findNodeAndOffset(editorRef.current);

//         if (found) {
//           selection.removeAllRanges();
//           selection.addRange(newRange);
//         }
//       }
//     }
//   }, [code]);

//   return (
//     <>
//       <style>{`
//         .code-editor {
//           width: 100%;
//           height: 100%;
//           min-height: 0;
//           background: #1a202c; /* bg-gray-900 */
//           color: #f6ad55; /* Light yellowish orange */
//           border: 2px solid #4a5568; /* border-gray-700 */
//           padding: 1rem;
//           border-radius: 0.5rem;
//           resize: none;
//           font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono", "Courier New", monospace;
//           font-size: 14px;
//           line-height: 1.5;
//           overflow: auto;
//           white-space: pre-wrap; /* Allows wrapping and preserves spaces */
//         }
//         .code-editor:focus {
//           outline: none;
//           border-color: #48bb78; /* focus:border-green-500 */
//         }
//         .keyword-block {
//           color: white;
//           font-weight: bold;
//         }
//         .keyword-command {
//           color: #D2B48C; /* Tan - a chocolaty brown */
//         }
//         .string {
//           color: #90cdf4; /* A light blue for strings */
//         }
//       `}</style>
//       <div
//         ref={editorRef}
//         contentEditable={true}
//         onInput={handleInput}
//         className="code-editor flex-grow"
//         spellCheck="false"
//         dangerouslySetInnerHTML={{ __html: highlightSyntax(code) }}
//       />
//     </>
//   );
// };



export const Editor = ({ code, setCode }) => {

  const highlightSyntax = (text) => {
    // Escape HTML to prevent injection before applying spans
    const escapedText = text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    let highlightedText = escapedText
      .replace(/"(.*?)"/g, '<span class="string">"$1"</span>') // Strings
      .replace(/\b(start|end|startFromSameLine)\b/g, '<span class="keyword-block">$1</span>') // Block keywords
      .replace(/\b(declare|init|set|write|headline|strong|muted|badge|design|set_url|draw|add|layout|gap|align)\b/g, '<span class="keyword-command">$1</span>')
      .replace(/\$[A-Za-z_][A-Za-z0-9_]*/g, '<span class="variable-token">$&</span>');

    // Add extra newline at the end if the text ends with one, to keep scroll synchronized
    return highlightedText + (text.endsWith('\n') ? ' ' : '');
  };

  const syncScroll = (e) => {
    const textarea = e.target;
    const pre = textarea.nextElementSibling;
    if (pre) {
      pre.scrollTop = textarea.scrollTop;
      pre.scrollLeft = textarea.scrollLeft;
    }
  };

  return (
    <>
      <style>{`
        .code-editor-container {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 0.5rem;
          background: #1a202c; /* bg-gray-900 */
          border: 2px solid #4a5568; /* border-gray-700 */
          overflow: hidden;
        }

        .code-editor-container:focus-within {
          border-color: #48bb78; /* focus:border-green-500 */
        }

        .code-editor-textarea,
        .code-editor-highlight {
          margin: 0;
          border: 0;
          background: none;
          box-sizing: border-box;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono", "Courier New", monospace;
          font-size: 14px;
          line-height: 1.5;
          padding: 1rem;
          width: 100%;
          height: 100%;
          white-space: pre-wrap;
          word-wrap: break-word;
          overflow: auto;
        }

        .code-editor-textarea {
          position: absolute;
          top: 0;
          left: 0;
          color: transparent;
          caret-color: #f6ad55;
          z-index: 1;
          resize: none;
        }

        .code-editor-textarea:focus {
          outline: none;
        }

        .code-editor-highlight {
          position: absolute;
          top: 0;
          left: 0;
          pointer-events: none;
          color: #f6ad55;
        }

        .keyword-block {
          color: white;
          font-weight: bold;
        }
        .keyword-command {
          color: #D2B48C; /* Tan - a chocolaty brown */
        }
        .string {
          color: #90cdf4; /* A light blue for strings */
        }
        .variable-token {
          color: #67e8f9;
        }
        .preview-strong {
          font-weight: 700;
        }
        .preview-muted {
          color: #64748b;
        }
        .preview-badge {
          display: inline-block;
          padding: 4px 10px;
          margin-right: 8px;
          margin-bottom: 6px;
          border-radius: 999px;
          background: #e2e8f0;
          color: #0f172a;
          font-size: 12px;
          font-weight: 600;
        }
        .preview-pipe {
          color: #94a3b8;
          margin: 0 8px;
        }
      `}</style>
      <div className="code-editor-container">
        <textarea
          className="code-editor-textarea"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          onScroll={syncScroll}
          spellCheck="false"
        />
        <pre
          className="code-editor-highlight"
          aria-hidden="true"
          dangerouslySetInnerHTML={{ __html: highlightSyntax(code) }}
        />
      </div>
    </>
  );
};
