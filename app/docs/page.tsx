import Link from "next/link";
import { SiteHeader } from "../comp/site-header";

const syntaxCards = [
  {
    title: "Variables",
    code: `declare fullName="Sidharth G"
declare role="Frontend Engineer"
declare portfolio="https://example.com"`,
  },
  {
    title: "Reusable styles",
    code: `start
init sectionTitle
set size "18"
set color "#0f172a"
end`,
  },
  {
    title: "Rendering content",
    code: `start
write "$fullName"
design sectionTitle
end`,
  },
];

export default function DocsPage() {
  return (
    <div className="app-root">
      <div className="container site-shell home-shell">
        <SiteHeader />

        <section className="docs-hero">
          <p className="eyebrow">Documentation</p>
          <h1 className="hero-title hero-title-docs">Build resumes with readable code</h1>
          <p className="hero-copy">
            codeResume uses a compact DSL for resume layout, reusable styles, and now global variables
            through the <code>declare</code> syntax.
          </p>
        </section>

        <section className="docs-grid">
          {syntaxCards.map((card) => (
            <article key={card.title} className="docs-card">
              <h2>{card.title}</h2>
              <pre>{card.code}</pre>
            </article>
          ))}
        </section>

        <section className="docs-section">
          <h2>Core syntax</h2>
          <div className="docs-list">
            <div className="docs-row">
              <strong>declare</strong>
              <span>Define variables once and reuse them anywhere with <code>$variableName</code>.</span>
            </div>
            <div className="docs-row">
              <strong>start / end</strong>
              <span>Create a new block on a fresh line.</span>
            </div>
            <div className="docs-row">
              <strong>startFromSameLine</strong>
              <span>Render a block inline with the previous line group.</span>
            </div>
            <div className="docs-row">
              <strong>init</strong>
              <span>Create reusable style presets like headers, links, and section titles.</span>
            </div>
            <div className="docs-row">
              <strong>design</strong>
              <span>Apply one of your reusable style presets to the current block.</span>
            </div>
            <div className="docs-row">
              <strong>write</strong>
              <span>Add text content to the current block.</span>
            </div>
            <div className="docs-row">
              <strong>set</strong>
              <span>Override spacing, size, color, and other style properties for a block.</span>
            </div>
            <div className="docs-row">
              <strong>set_url</strong>
              <span>Turn a block into a clickable link.</span>
            </div>
            <div className="docs-row">
              <strong><code>draw &quot;line&quot;</code></strong>
              <span>Render a divider between sections.</span>
            </div>
            <div className="docs-row">
              <strong><code>add &quot;dot&quot;</code></strong>
              <span>Insert a bullet marker for list-style lines.</span>
            </div>
          </div>
        </section>

        <section className="docs-section">
          <h2>Example</h2>
          <pre className="docs-example">{`declare fullName="Sidharth G"
declare title="Lead Software Engineer"
declare portfolioLabel="Portfolio"
declare portfolioUrl="https://yoursite.com"

start
write "$fullName"
design header
end

start
write "$title"
set color "#64748b"
end

startFromSameLine
write "$portfolioLabel"
design linkStyle
set_url "$portfolioUrl"
end`}</pre>
        </section>

        <section className="docs-section docs-cta">
          <div>
            <h2>Start building</h2>
            <p>Open the editor and use the full template as a working reference.</p>
          </div>
          <Link href="/editor?template=full" className="primary-link">
            Launch the Builder
          </Link>
        </section>
      </div>
    </div>
  );
}
