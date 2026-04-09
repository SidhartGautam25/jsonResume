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

  // Build the main content of the element
  const content = (
    <div style={style} className="preview-element">
      {element.content?.map((item, i) => {
        if (item.type === 'text') return <span key={i}>{item.value}</span>;
        if (item.type === 'headline') return <span key={i} className="preview-headline-inline">{item.value}</span>;
        if (item.type === 'strong') return <strong key={i} className="preview-strong">{item.value}</strong>;
        if (item.type === 'muted') return <span key={i} className="preview-muted">{item.value}</span>;
        if (item.type === 'badge') return <span key={i} className="preview-badge">{item.value}</span>;
        if (item.type === 'dot') return <span key={i} className="dot">•</span>;
        if (item.type === 'pipe') return <span key={i} className="preview-pipe">|</span>;
        if (item.type === 'break') return <br key={i} />;
        return null;
      })}
    </div>
  );

  // If the element has a URL, wrap it in an anchor tag unless disabled
  if (element.url && !disableLinks) {
    return <a href={element.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>{content}</a>;
  }

  return content;
};

export const Preview = ({ parsedJson, disableLinks = false }) => {
  if (!parsedJson || !parsedJson.elements || parsedJson.elements.length === 0) {
    return (
      <div className="preview-empty">
        Output will be rendered here...
      </div>
    );
  }

  // 1. Group elements into lines. An element with `isInline` gets added
  //    to the previous line's group. Otherwise, it starts a new line group.
  const groupedLines = parsedJson.elements.reduce((acc, element) => {
    if (element.isInline && acc.length > 0) {
      acc[acc.length - 1].push(element);
    } else {
      acc.push([element]);
    }
    return acc;
  }, []);

  return (
    <div className="preview-content">
      {groupedLines.map((lineGroup, index) => {
        const lineLayout = lineGroup.find((element) => element.layout)?.layout || 'between';
        const lineGap = lineGroup.find((element) => element.gap)?.gap || '0';
        const justifyContentMap = {
          start: 'flex-start',
          center: 'center',
          end: 'flex-end',
          between: 'space-between',
          around: 'space-around',
        };

        if (lineGroup.length > 1) {
          return (
            <div
              key={index}
              style={{
                display: 'flex',
                justifyContent: justifyContentMap[lineLayout] || 'space-between',
                alignItems: 'baseline',
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

        // 3. If it's a normal single-element line, render it directly.
        const singleElement = lineGroup[0];
        return <ElementRenderer key={index} element={singleElement} disableLinks={disableLinks} />;
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
