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
  ["init page", "Define page-level styles such as border, padding, and other full-resume presentation rules."],
  ["design", "Apply a named preset to the current block."],
  ["write", "Render normal text."],
  ["headline", "Render a larger in-block heading line, useful for stacked classic resume headers."],
  ["strong", "Render emphasized text for titles, company names, or section-leading phrases."],
  ["muted", "Render lower-emphasis metadata such as dates, location, email, and supporting labels."],
  ["badge", "Render pill-like tags for skills, capabilities, and focus areas."],
  ["set_url", "Turn the current block into a clickable link."],
  ['draw "line"', "Render a divider line between major resume sections."],
  ['draw "bar"', "Render a vertical bar, useful for classic left-accent headers."],
  ['add "dot"', "Insert a bullet marker before the following content."],
  ['add "pipe"', "Insert an inline separator for compact metadata rows."],
  ['add "break"', "Insert a line break inside the current block."],
  ["layout", "Control same-line distribution with start, center, end, between, or around."],
  ["gap", "Add horizontal space between items grouped on the same line."],
  ["align", "Control text alignment inside a single block."],
];

const styleRows = [
  ["size", "Font size in pixels."],
  ["color", "Text or line color."],
  ["backgroundColor", "Set a background color on a specific block or on the page preset."],
  ["fontWeight", "Weight for headings or emphasized text."],
  ["lineHeight", "Line height for denser or more breathable copy."],
  ["fontFamily", "Useful for matching serif or sans-serif resume styles."],
  ["letterSpacing", "Useful for uppercase section labels."],
  ["decoration", "Use underline for links or intentional emphasis."],
  ["transform", "Use uppercase or lowercase for presentation control."],
  ["spaceFromTop", "Top spacing in pixels."],
  ["spaceFromBottom", "Bottom spacing in pixels."],
  ["spaceFromLeft", "Left margin in pixels."],
  ["spaceFromRight", "Right margin in pixels."],
  ["column", "Assign a block to a named column such as left or right inside a multi-column section."],
  ["columnWidth", "Set the width of a column block, such as 60% or 36%."],
  ["columnGap", "Set the gap between columns in a grouped multi-column layout."],
  ["columnAlign", "Control cross-axis alignment inside same-line grouped blocks when needed."],
  ["columnBackgroundColor", "Paint the background of an entire column container, useful for sidebars."],
  ["columnPadding / columnPaddingTop / columnPaddingBottom / columnPaddingLeft / columnPaddingRight", "Add inner spacing to an entire column container."],
  ["columnBorderWidth / columnBorderColor / columnBorderRadius", "Style the outer frame of a whole column container."],
  ["hangingIndent", "Optional bullet-wrap alignment. When set on a dot-bullet block, wrapped lines align under the text instead of under the bullet."],
  ["paddingLeft / paddingRight", "Useful for inset headers or bordered content blocks."],
  ["paddingTop / paddingBottom", "Add inner spacing without changing line grouping."],
  ["padding", "Apply overall inner spacing to a page-level or block-level container."],
  ["width / maxWidth", "Useful when constraining longer summary or project lines."],
  ["height", "Useful for vertical bars and fixed accents."],
  ["borderWidth / borderColor", "Useful for page borders and stronger classic layouts."],
  ["borderLeftWidth / borderLeftColor", "Create left-accent headers or bordered blocks."],
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
          <p>
            Most resumes are composed from three ideas: reusable declared values, style presets created with
            <code> init</code>, and content blocks that mix commands like <code>strong</code>, <code>muted</code>,
            <code> badge</code>, <code>draw</code>, and <code>add</code>.
          </p>
          <p>
            When you need advanced layout, you can also define page-level styling with <code>init page</code> and
            assign blocks into named columns using <code>set column</code> and <code>set columnWidth</code>.
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
          <h2>Two-column layout example</h2>
          <p>
            To build a true two-column resume section, assign consecutive blocks to a left and right column. The
            renderer groups those blocks together and keeps each column stacked independently.
          </p>
          <pre className="docs-example">{`start
write "Projects"
design sectionHeading
set column "left"
set columnWidth "60%"
set columnGap "24"
end

start
write "Career Objective"
design sectionHeading
set column "right"
set columnWidth "36%"
end

start
write "Project content continues in the left rail..."
set column "left"
set columnWidth "60%"
end

start
write "Objective content continues in the right rail..."
set column "right"
set columnWidth "36%"
end`}</pre>
        </section>

        <section className="docs-section">
          <h2>Page-level styling example</h2>
          <pre className="docs-example">{`start
init page
set borderWidth "4"
set borderColor "#111111"
set padding "22"
end`}</pre>
          <p>
            Use page styles when a template needs a visible outer frame, tighter inner margins, or a more deliberate
            paper treatment.
          </p>
        </section>

        <section className="docs-section">
          <h2>Sidebar background example</h2>
          <pre className="docs-example">{`start
write "Education"
design sectionHeading
set column "left"
set columnWidth "34%"
set columnBackgroundColor "#ececec"
set columnPaddingTop "24"
set columnPaddingBottom "24"
set columnPaddingLeft "20"
set columnPaddingRight "20"
end`}</pre>
          <p>
            Column background styles apply to the whole grouped column, not just to one block, which makes them ideal
            for sidebar resume layouts.
          </p>
        </section>

        <section className="docs-section">
          <h2>Optional hanging indent for bullets</h2>
          <p>
            By default, bullet lines wrap naturally with the bullet inline. If you want wrapped lines to align
            under the first word instead of under the bullet, add <code>{'set hangingIndent "18"'}</code> or another
            width that fits your layout.
          </p>
          <pre className="docs-example">{`start
add "dot"
write "Implemented a new stormwater retention plan for the City of Montreal, resulting in the creation of additional land for development."
set hangingIndent "18"
set spaceFromLeft "14"
end`}</pre>
          <p>
            This is opt-in and only affects blocks that contain <code>{'add "dot"'}</code>. Existing templates and
            older bullet blocks continue to work exactly the same unless you explicitly set the property.
          </p>
        </section>

        <section className="docs-section">
          <h2>Block behavior details</h2>
          <div className="docs-list">
            <div className="docs-row">
              <strong>Single block</strong>
              <span>
                A normal <code>start</code> block renders on its own line and is best for summary text, bullets,
                and section titles.
              </span>
            </div>
            <div className="docs-row">
              <strong>Inline block</strong>
              <span>
                A <code>startFromSameLine</code> block joins the previous line group. Use it for right-aligned
                company/date pairs, compact metadata, and tag rows.
              </span>
            </div>
            <div className="docs-row">
              <strong>Layout + gap</strong>
              <span>
                <code>layout</code> controls how items in the same line group are distributed, while <code>gap</code>
                adds breathing room between them.
              </span>
            </div>
            <div className="docs-row">
              <strong>Preset merge order</strong>
              <span>
                Global styles apply first, then preset styles from <code>design</code>, then block-level
                <code>set</code> values override both.
              </span>
            </div>
          </div>
        </section>

        <section className="docs-section">
          <h2>Working with templates</h2>
          <p>
            Start with <code>professional</code> for a balanced software-engineering resume,
            <code> executive</code> for leadership-heavy profiles, <code>ats_pro</code> for simpler ATS-friendly
            structure, <code>studio_pro</code> for a more design-forward presentation, and
            <code> community_intern_two_column</code> for a two-column student/community resume layout. Use
            <code> marketing_sidebar</code> for a sidebar-style resume with column background treatment.
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
