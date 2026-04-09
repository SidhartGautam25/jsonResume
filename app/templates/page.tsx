'use client'

import Link from "next/link";
import { SiteHeader } from "../comp/site-header";
import { Preview } from "../comp/preview";
import { templates } from "./registry";
import { parseCodeToJson } from "../utils/jsonParsing";

const formatTemplateName = (key: string) =>
  key
    .split('_')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

export default function TemplatesPage() {
  return (
    <div className="app-root" style={{ overflow: 'auto' }}>
      <div className="container site-shell home-shell">
        <SiteHeader />

        <section className="docs-hero docs-hero-shell">
          <div>
            <p className="eyebrow">Templates</p>
            <h1 className="hero-title hero-title-docs">Browse every resume starter in one place</h1>
            <p className="hero-copy">
              Explore the full template collection, preview each layout, and open any one directly in the builder.
            </p>
          </div>
          <div className="docs-side-note">
            <h3>Quick tip</h3>
            <p>Start with the closest layout, then customize your declared values, spacing, and sections in the editor.</p>
          </div>
        </section>

        <section className="section-head">
          <div>
            <p className="eyebrow">Gallery</p>
            <h2>All templates</h2>
          </div>
          <Link href="/editor?template=full" className="text-link">
            Open builder
          </Link>
        </section>

        <div className="gallery-grid">
          {Object.entries(templates).map(([key, code]) => (
            <Link href={`/editor?template=${key}`} key={key} style={{ textDecoration: 'none' }}>
              <div className="gallery-card">
                <div className="gallery-thumbnail-wrap">
                  <div className="gallery-thumbnail">
                    <Preview parsedJson={parseCodeToJson(code)} disableLinks={true} />
                  </div>
                </div>
                <div className="gallery-card-footer">
                  <h3>{formatTemplateName(key)}</h3>
                  <p>Open this template in the builder</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
