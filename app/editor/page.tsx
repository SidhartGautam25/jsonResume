'use client'
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from 'next/navigation';
import { Editor, Preview } from "../comp/preview";
import { parseCodeToJson } from '../utils/jsonParsing';
import { templates } from '../templates/registry';
import Link from 'next/link';

function EditorContent() {
  const searchParams = useSearchParams();
  const templateKey = searchParams.get('template') || 'full';
  
  const initialCode = templates[templateKey as keyof typeof templates] || templates['full'];

  const [code, setCode] = useState(initialCode);
  const [parsedJson, setParsedJson] = useState<any>(null);

  const handleCompile = () => {
    const res: any = parseCodeToJson(code);
    setParsedJson(res);
  };

  return (
    <div className="app-root">
      <div className="container">
        <header className="header">
          <Link href="/" style={{ textDecoration: 'none' }}>
            <h1 className="title" style={{ cursor: 'pointer' }}>codeResume</h1>
          </Link>
          <p className="subtitle">
            Editing Template: {templateKey}
          </p>
        </header>

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
