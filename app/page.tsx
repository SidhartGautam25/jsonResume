'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { templates } from './templates/registry';
import { parseCodeToJson } from './utils/jsonParsing';
import { Preview } from "./comp/preview";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Avoid hydration mismatch for parsed templates
  if (!mounted) return null;

  return (
    <div className="app-root" style={{ overflow: 'auto' }}>
      <div className="container" style={{ maxWidth: '1200px' }}>
        <header className="header" style={{ marginBottom: '60px', marginTop: '40px' }}>
          <h1 className="title" style={{ fontSize: '48px' }}>codeResume</h1>
          <p className="subtitle" style={{ fontSize: '18px' }}>Choose a template to start building</p>
        </header>
        
        <div className="gallery-grid">
          {Object.entries(templates).map(([key, code]) => {
             const parsedRes = parseCodeToJson(code);
             
             return (
               <Link href={`/editor?template=${key}`} key={key} style={{ textDecoration: 'none' }}>
                 <div className="gallery-card">
                   <div className="gallery-thumbnail-wrap">
                     <div className="gallery-thumbnail">
                        <Preview parsedJson={parsedRes} disableLinks={true} />
                     </div>
                   </div>
                   <div className="gallery-card-footer">
                     <h3>{key.charAt(0).toUpperCase() + key.slice(1)} Resume</h3>
                     <p>Click to open in editor</p>
                   </div>
                 </div>
               </Link>
             );
          })}
        </div>
      </div>
    </div>
  );
}
