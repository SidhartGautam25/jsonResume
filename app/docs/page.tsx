import Link from "next/link";
import { SiteHeader } from "../comp/site-header";

const quickStartCards = [
  {
    title: "1. Declare your profile",
    code: `declare fullName="Sidharth Gupta"
declare title="Senior Frontend Engineer"
declare email="sidharth@example.com"`,
  },
  {
    title: "2. Create reusable styles",
    code: `start
init section
set size "12"
set transform "uppercase"
set fontWeight "700"
end`,
  },
  {
    title: "3. Compose the resume",
    code: `start
write "Summary"
design section
end`,
  },
];

const commandRows = [
  ["declare", "Define reusable content values once and reference them later with $variableName."],
  ["start / end", "Create a new block that renders on a new line."],
  ["startFromSameLine", "Attach the block to the previous line so you can build left-right resume rows."],
  ["init", "Define a named style preset such as section headers, metadata, or role titles."],
  ["design", "Apply a named preset to the current block."],
  ["write", "Render normal text."],
  ["strong", "Render emphasized text for titles, company names, or section-leading phrases."],
  ["muted", "Render lower-emphasis metadata such as dates, location, email, and supporting labels."],
  ["badge", "Render pill-like tags for skills, capabilities, and focus areas."],
  ["set_url", "Turn the current block into a clickable link."],
  ['draw "line"', "Render a divider line between major resume sections."],
  ['add "dot"', "Insert a bullet marker before the following content."],
  ['add "pipe"', "Insert an inline separator for compact metadata rows."],
  ["layout", "Control same-line distribution with start, center, end, between, or around."],
  ["gap", "Add horizontal space between items grouped on the same line."],
  ["align", "Control text alignment inside a single block."],
];

const styleRows = [
  ["size", "Font size in pixels."],
  ["color", "Text or line color."],
  ["fontWeight", "Weight for headings or emphasized text."],
  ["lineHeight", "Line height for denser or more breathable copy."],
  ["letterSpacing", "Useful for uppercase section labels."],
  ["decoration", "Use underline for links or intentional emphasis."],
  ["transform", "Use uppercase or lowercase for presentation control."],
  ["spaceFromTop", "Top spacing in pixels."],
  ["spaceFromBottom", "Bottom spacing in pixels."],
  ["spaceFromLeft", "Left margin in pixels."],
  ["spaceFromRight", "Right margin in pixels."],
  ["width / maxWidth", "Useful when constraining longer summary or project lines."],
  ["weight", "Border thickness for draw line blocks."],
];

export default function DocsPage() {
  return (
    <div className="app-root">
      <div className="container site-shell home-shell">
        <SiteHeader />

        <section className="docs-hero docs-hero-shell">
          <div>
            <p className="eyebrow">Documentation</p>
            <h1 className="hero-title hero-title-docs">Everything you need to write, style, and export a professional resume</h1>
            <p className="hero-copy">
              codeResume is a block-first DSL for authoring resumes with reusable variables, layout-aware rows,
              professional templates, and built-in export options.
            </p>
          </div>
          <div className="docs-side-note">
            <h3>Export formats</h3>
            <p>Use the editor to export PDF via print, plus HTML, JSON, and raw DSL TXT downloads.</p>
          </div>
        </section>

        <section className="docs-grid">
          {quickStartCards.map((card) => (
            <article key={card.title} className="docs-card">
              <h2>{card.title}</h2>
              <pre>{card.code}</pre>
            </article>
          ))}
        </section>

        <section className="docs-section">
          <h2>How the language works</h2>
          <p>
            A resume is built from blocks. Each block starts with <code>start</code> or
            <code> startFromSameLine</code>, contains one or more commands, and closes with <code>end</code>.
            Variables declared at the top can be reused throughout the file.
          </p>
        </section>

        <section className="docs-section">
          <h2>Command reference</h2>
          <div className="docs-list">
            {commandRows.map(([label, description]) => (
              <div className="docs-row" key={label}>
                <strong>{label}</strong>
                <span>{description}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="docs-section">
          <h2>Style reference</h2>
          <div className="docs-list">
            {styleRows.map(([label, description]) => (
              <div className="docs-row" key={label}>
                <strong>{label}</strong>
                <span>{description}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="docs-section">
          <h2>Build a polished header</h2>
          <pre className="docs-example">{`declare fullName="Sidharth Gupta"
declare title="Senior Frontend Engineer"
declare email="sidharth@example.com"
declare phone="+91 98765 43210"
declare portfolioLabel="Portfolio"
declare portfolioUrl="https://sidharth.dev"

start
write "$fullName"
design heroName
end

start
muted "$title"
design roleLine
end

start
muted "$email"
layout "start"
gap "14"
end

startFromSameLine
add "pipe"
muted "$phone"
end

startFromSameLine
add "pipe"
write "$portfolioLabel"
set_url "$portfolioUrl"
end`}</pre>
        </section>

        <section className="docs-section">
          <h2>Build a clean experience section</h2>
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
end

start
add "dot"
write "Led the migration of a flagship dashboard to Next.js, improving load time by 42%."
set spaceFromLeft "14"
set spaceFromTop "4"
end`}</pre>
        </section>

        <section className="docs-section">
          <h2>Working with templates</h2>
          <p>
            Start with <code>professional</code> for a balanced software-engineering resume,
            <code> executive</code> for leadership-heavy profiles, <code>ats_pro</code> for simpler ATS-friendly
            structure, and <code>studio_pro</code> for a more design-forward presentation.
          </p>
        </section>

        <section className="docs-section">
          <h2>Export guide</h2>
          <div className="docs-list">
            <div className="docs-row">
              <strong>PDF</strong>
              <span>Uses your browser print dialog. The editor pane is hidden in print mode so the resume fills the page.</span>
            </div>
            <div className="docs-row">
              <strong>HTML</strong>
              <span>Exports a standalone HTML file with inline styles for sharing or hosting.</span>
            </div>
            <div className="docs-row">
              <strong>JSON</strong>
              <span>Exports the compiled structure after parsing, useful for debugging or future tooling.</span>
            </div>
            <div className="docs-row">
              <strong>TXT</strong>
              <span>Exports the raw DSL source so users can version, share, or edit it outside the app.</span>
            </div>
          </div>
        </section>

        <section className="docs-section">
          <h2>Resume writing tips</h2>
          <div className="docs-list">
            <div className="docs-row">
              <strong>Lead with impact</strong>
              <span>Prefer bullets that show outcomes, metrics, and ownership instead of vague responsibility statements.</span>
            </div>
            <div className="docs-row">
              <strong>Keep sections focused</strong>
              <span>Use concise headers, clear metadata, and only the strongest experience bullets per role.</span>
            </div>
            <div className="docs-row">
              <strong>Use badges selectively</strong>
              <span>Badges work best for skills or capability snapshots, not for long content blocks.</span>
            </div>
            <div className="docs-row">
              <strong>Choose the right template</strong>
              <span>ATS-focused resumes should favor simpler structure, while design-heavy roles can use more visual emphasis.</span>
            </div>
          </div>
        </section>

        <section className="docs-section docs-cta">
          <div>
            <h2>Start with a finished template</h2>
            <p>Open one of the stronger professional templates and customize only the declared values and experience blocks first.</p>
          </div>
          <Link href="/editor?template=professional" className="primary-link">
            Launch Professional Template
          </Link>
        </section>
      </div>
    </div>
  );
}
