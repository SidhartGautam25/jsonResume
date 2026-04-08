'use client'
import React, { useEffect, useRef } from 'react';
// import { convertToReactStyles } from "../../../codeResume/client/src/utils/design";
import { convertToReactStyles } from "../utils/design";

/**
 * A helper component to render a single element.
 * This avoids code duplication and makes the main component cleaner.
 */
const ElementRenderer = ({ element }) => {
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

  // Build the main content of the element
  const content = (
    <div style={style} className="preview-element">
      {element.content?.map((item, i) => {
        if (item.type === 'text') return <span key={i}>{item.value}</span>;
        if (item.type === 'dot') return <span key={i} className="dot">•</span>;
        return null;
      })}
    </div>
  );

  // If the element has a URL, wrap it in an anchor tag
  if (element.url) {
    return <a href={element.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>{content}</a>;
  }

  return content;
};

export const Preview = ({ parsedJson }) => {
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
        // 2. If a line has multiple elements, wrap them in a flex container.
        if (lineGroup.length > 1) {
          return (
            <div
              key={index}
              style={{
                display: 'flex',
                justifyContent: 'space-between', // Pushes items to opposite ends
                alignItems: 'baseline', // Aligns text nicely
              }}
            >
              {lineGroup.map((element, elIndex) => (
                <ElementRenderer key={elIndex} element={element} />
              ))}
            </div>
          );
        }

        // 3. If it's a normal single-element line, render it directly.
        const singleElement = lineGroup[0];
        return <ElementRenderer key={index} element={singleElement} />;
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
  const editorRef = useRef(null);

  const highlightSyntax = (text) => {
    // Escape HTML to prevent injection before applying spans
    const escapedText = text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    let highlightedText = escapedText
      .replace(/"(.*?)"/g, '<span class="string">"$1"</span>') // Strings
      .replace(/\b(start|end|startFromSameLine)\b/g, '<span class="keyword-block">$1</span>') // Block keywords
      .replace(/\b(init|set|write|design|set_url|draw|add)\b/g, '<span class="keyword-command">$1</span>'); // Command keywords

    return highlightedText.replace(/\n/g, '<br/>');
  };

  const handleInput = (e) => {
    setCode(e.currentTarget.innerText);
  };

  // This effect synchronizes the div content with the state,
  // handling updates from typing and pasting while preserving cursor position.
  useEffect(() => {
    if (editorRef.current) {
      // --- Save Cursor Position ---
      const selection = window.getSelection();
      const range = selection.rangeCount > 0 ? selection.getRangeAt(0) : null;
      let charCount = -1;

      // Only save the cursor position if it's inside the editor
      if (range && editorRef.current.contains(range.startContainer)) {
        const preCaretRange = range.cloneRange();
        preCaretRange.selectNodeContents(editorRef.current);
        preCaretRange.setEnd(range.endContainer, range.endOffset);
        charCount = preCaretRange.toString().length;
      }

      // --- Update Content ---
      editorRef.current.innerHTML = highlightSyntax(code);

      // --- Restore Cursor Position ---
      if (charCount !== -1) {
        let newRange = document.createRange();
        let charCounter = 0;
        let found = false;

        const findNodeAndOffset = (node) => {
          if (found) return;
          if (node.nodeType === Node.TEXT_NODE) {
            const nextCharCounter = charCounter + node.length;
            if (charCount <= nextCharCounter) {
              // Use Math.min to prevent errors if charCount is slightly off
              newRange.setStart(node, Math.min(node.length, charCount - charCounter));
              newRange.collapse(true);
              found = true;
            } else {
              charCounter = nextCharCounter;
            }
          } else {
            for (const child of node.childNodes) {
              findNodeAndOffset(child);
            }
          }
        };

        findNodeAndOffset(editorRef.current);

        if (found) {
          selection.removeAllRanges();
          selection.addRange(newRange);
        }
      }
    }
  }, [code]);

  return (
    <>
      <style>{`
        .code-editor {
          width: 100%;
          height: 100%;
          min-height: 0;
          background: #1a202c; /* bg-gray-900 */
          color: #f6ad55; /* Light yellowish orange */
          border: 2px solid #4a5568; /* border-gray-700 */
          padding: 1rem;
          border-radius: 0.5rem;
          resize: none;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono", "Courier New", monospace;
          font-size: 14px;
          line-height: 1.5;
          overflow: auto;
          white-space: pre-wrap; /* Allows wrapping and preserves spaces */
        }
        .code-editor:focus {
          outline: none;
          border-color: #48bb78; /* focus:border-green-500 */
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
      `}</style>
      <div
        ref={editorRef}
        contentEditable={true}
        onInput={handleInput}
        className="code-editor"
        spellCheck="false"
      />
    </>
  );
};