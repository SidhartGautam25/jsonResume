'use client'
import React from 'react';
import Link from 'next/link';
import { templates } from './templates/registry';
import { parseCodeToJson } from './utils/jsonParsing';
import { Preview } from "./comp/preview";
import { SiteHeader } from "./comp/site-header";

const features = [
  "Code-first builder with live preview",
  "Reusable variables with declare syntax",
  "Design presets for consistent styling",
  "Template gallery for faster starting points",
];

const productNotes = [
  {
    title: "Built for iteration",
    description: "Tweak content, spacing, and links in one place instead of searching through every block.",
  },
  {
    title: "Resume-focused DSL",
    description: "A small language keeps the editor readable while still giving you fine control over layout.",
  },
  {
    title: "Professional workflow",
    description: "Start from a template, customize your variables, and ship a polished resume much faster.",
  },
];

export default function Home() {
  return (
    <div className="app-root" style={{ overflow: 'auto' }}>
      <div className="container site-shell home-shell">
        <SiteHeader />

        <section className="hero-section">
          <div className="hero-copy-wrap">
            <p className="eyebrow">Code-first resume builder</p>
            <h1 className="hero-title">Build a professional resume with reusable syntax and live preview.</h1>
            <p className="hero-copy">
              codeResume turns resume editing into a developer workflow. Define your core details once,
              reuse them everywhere, and keep design consistent with reusable styles.
            </p>
            <div className="hero-actions">
              <Link href="/editor?template=full" className="primary-link">
                Start with Full Template
              </Link>
              <Link href="/docs" className="secondary-link">
                Read Documentation
              </Link>
            </div>
            <div className="feature-pill-row">
              {features.map((feature) => (
                <span key={feature} className="feature-pill">
                  {feature}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-preview-card">
            <div className="hero-preview-label">Featured template preview</div>
            <div className="hero-preview-paper">
              <Preview parsedJson={parseCodeToJson(templates.full)} disableLinks={true} />
            </div>
          </div>
        </section>

        <section className="insight-grid">
          {productNotes.map((item) => (
            <article key={item.title} className="insight-card">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </article>
          ))}
        </section>

        <section className="section-head">
          <div>
            <p className="eyebrow">Templates</p>
            <h2>Choose a starting point</h2>
          </div>
          <Link href="/editor?template=full" className="text-link">
            Open builder
          </Link>
        </section>

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

        <section className="cta-band">
          <div>
            <p className="eyebrow">What’s new</p>
            <h2>Variables now work across content, styles, and links</h2>
            <p>
              Use <code>{'declare fullName="Sidharth"'}</code> once, then reference it anywhere with
              <code> $fullName</code>.
            </p>
          </div>
          <Link href="/docs" className="primary-link">
            See the syntax
          </Link>
        </section>
      </div>
    </div>
  );
}
