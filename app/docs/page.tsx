import Link from "next/link";
import { SiteHeader } from "../comp/site-header";

const syntaxCards = [
  {
    title: "Variables",
    code: `declare fullName="Sidharth G"
declare title="Senior Frontend Engineer"
declare portfolioUrl="https://example.com"`,
  },
  {
    title: "Layout primitives",
    code: `start
muted "$email"
layout "start"
gap "14"
end

startFromSameLine
muted "$phone"
end`,
  },
  {
    title: "Richer elements",
    code: `start
strong "Northstar Labs"
badge "Remote"
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
            codeResume stays block-first and now supports stronger layout primitives plus richer
            resume-friendly elements, while keeping the original syntax intact.
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
              <span>Attach the current block to the same line group as the block above it.</span>
            </div>
            <div className="docs-row">
              <strong>init</strong>
              <span>Create reusable style presets like headers, meta text, and section titles.</span>
            </div>
            <div className="docs-row">
              <strong>design</strong>
              <span>Apply one of your reusable style presets to the current block.</span>
            </div>
            <div className="docs-row">
              <strong>write</strong>
              <span>Render normal body text.</span>
            </div>
            <div className="docs-row">
              <strong>strong</strong>
              <span>Render emphasized text for titles, roles, or company names.</span>
            </div>
            <div className="docs-row">
              <strong>muted</strong>
              <span>Render secondary text for metadata like dates, location, or links.</span>
            </div>
            <div className="docs-row">
              <strong>badge</strong>
              <span>Render a pill-style skill or tag element.</span>
            </div>
            <div className="docs-row">
              <strong>layout</strong>
              <span>
                Control same-line distribution with <code>start</code>, <code>center</code>,
                <code> end</code>, <code>between</code>, or <code>around</code>.
              </span>
            </div>
            <div className="docs-row">
              <strong>gap</strong>
              <span>Add spacing between items on the same line.</span>
            </div>
            <div className="docs-row">
              <strong>align</strong>
              <span>Control text alignment inside a block.</span>
            </div>
            <div className="docs-row">
              <strong>set</strong>
              <span>
                Override styles like <code>size</code>, <code>color</code>, <code>fontWeight</code>,
                <code> lineHeight</code>, <code>letterSpacing</code>, <code>transform</code>,
                <code> width</code>, and spacing values.
              </span>
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
              <span>Insert a bullet marker for highlights.</span>
            </div>
            <div className="docs-row">
              <strong><code>add &quot;pipe&quot;</code></strong>
              <span>Insert a simple pipe separator in inline content.</span>
            </div>
          </div>
        </section>

        <section className="docs-section">
          <h2>Professional header example</h2>
          <pre className="docs-example">{`declare fullName="Sidharth Gupta"
declare email="sidharth@example.com"
declare phone="+91 98765 43210"
declare portfolioLabel="Portfolio"
declare portfolioUrl="https://sidharth.dev"

start
write "$fullName"
design heroName
end

start
muted "$email"
layout "start"
gap "14"
end

startFromSameLine
muted "$phone"
end

startFromSameLine
write "$portfolioLabel"
set_url "$portfolioUrl"
end`}</pre>
        </section>

        <section className="docs-section">
          <h2>Experience row example</h2>
          <pre className="docs-example">{`start
strong "Senior Frontend Engineer"
design itemTitle
end

startFromSameLine
strong "Northstar Labs"
design itemTitle
layout "between"
end

start
muted "Remote"
design meta
end

startFromSameLine
muted "2022 - Present"
design meta
layout "between"
end`}</pre>
        </section>

        <section className="docs-section docs-cta">
          <div>
            <h2>Start with a full template</h2>
            <p>Open the Professional, Executive, or ATS Pro templates to see the newer layout and content primitives in action.</p>
          </div>
          <Link href="/editor?template=professional" className="primary-link">
            Launch Professional Template
          </Link>
        </section>
      </div>
    </div>
  );
}
