'use client'
import { useState, Suspense } from "react";
import { useSearchParams } from 'next/navigation';
import { Editor, Preview } from "../comp/preview";
import { parseCodeToJson } from '../utils/jsonParsing';
import { templates } from '../templates/registry';
import { SiteHeader } from "../comp/site-header";

function EditorContent() {
  const searchParams = useSearchParams();
  const templateKey = searchParams.get('template') || 'full';
  
  const initialCode = templates[templateKey as keyof typeof templates] || templates['full'];
  const initialParsedJson = parseCodeToJson(initialCode);

  const [code, setCode] = useState(initialCode);
  const [parsedJson, setParsedJson] = useState(initialParsedJson);

  const handleCompile = () => {
    const res = parseCodeToJson(code);
    setParsedJson(res);
  };

  return (
    <div className="app-root">
      <div className="container">
        <div style={{ marginBottom: '24px' }}>
          <SiteHeader showLaunchButton={false} />
        </div>

        <div className="grid">
          {/* LEFT - Editor panel */}
          <div className="panel panel-left">
            <div className="editor-wrap">
              <Editor code={code} setCode={setCode} />
            </div>

            <button onClick={handleCompile} className="compile-btn">
              Compile
            </button>
          </div>

          {/* RIGHT - Preview panel */}
          <div className="panel panel-right">
            <div className="paper">
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
    <Suspense fallback={<div style={{color:'white', padding: '50px'}}>Loading Editor...</div>}>
      <EditorContent />
    </Suspense>
  );
}
