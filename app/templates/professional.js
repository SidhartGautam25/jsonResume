const professional = `declare fullName="Sidharth Gupta"
declare title="Senior Frontend Engineer"
declare location="Bengaluru, India"
declare email="sidharth@example.com"
declare phone="+91 98765 43210"
declare portfolioLabel="Portfolio"
declare portfolioUrl="https://sidharth.dev"
declare linkedinLabel="LinkedIn"
declare linkedinUrl="https://linkedin.com/in/sidharth"
declare githubLabel="GitHub"
declare githubUrl="https://github.com/sidharth"

start
init global
set spaceFromLeft "0"
set size "13"
set color "#334155"
set lineHeight "1.58"
end

start
init heroName
set size "30"
set color "#0f172a"
set fontWeight "700"
set spaceFromBottom "4"
end

start
init roleLine
set size "15"
set color "#475569"
set spaceFromBottom "14"
end

start
init section
set size "12"
set color "#0f172a"
set fontWeight "700"
set transform "uppercase"
set letterSpacing "1.6"
set spaceFromTop "20"
set spaceFromBottom "10"
end

start
init meta
set size "12"
set color "#64748b"
end

start
init itemTitle
set size "14"
set color "#0f172a"
set fontWeight "700"
end

start
write "$fullName"
design heroName
end

start
muted "$title"
design roleLine
end

start
muted "$location"
design meta
layout "start"
gap "14"
end

startFromSameLine
add "pipe"
muted "$email"
design meta
set_url "mailto:$email"
end

startFromSameLine
add "pipe"
muted "$phone"
design meta
end

startFromSameLine
add "pipe"
write "$portfolioLabel"
design meta
set_url "$portfolioUrl"
set decoration "underline"
end

startFromSameLine
add "pipe"
write "$linkedinLabel"
design meta
set_url "$linkedinUrl"
set decoration "underline"
end

startFromSameLine
add "pipe"
write "$githubLabel"
design meta
set_url "$githubUrl"
set decoration "underline"
end

start
draw "line"
set weight "1"
set color "#cbd5e1"
set spaceFromTop "16"
set spaceFromBottom "18"
end

start
write "Summary"
design section
end

start
write "Senior frontend engineer with 6+ years of experience shipping performant product surfaces, internal platforms, and design systems for SaaS teams. Strong track record in accessibility, performance tuning, and cross-functional execution."
end

start
write "Core Skills"
design section
end

start
badge "TypeScript"
badge "React"
badge "Next.js"
badge "Design Systems"
badge "Accessibility"
badge "Web Performance"
badge "Storybook"
badge "Playwright"
end

start
write "Experience"
design section
end

start
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
write "Led the migration of a flagship customer dashboard to Next.js, improving initial page load time by 42%."
set spaceFromLeft "14"
set spaceFromTop "4"
end

start
add "dot"
write "Built a shared component library used across 5 product teams, reducing duplicate UI work and improving consistency."
set spaceFromLeft "14"
end

start
add "dot"
write "Partnered with product and design to redesign onboarding, contributing to an 18% lift in activation."
set spaceFromLeft "14"
end

start
strong "Frontend Engineer"
design itemTitle
set spaceFromTop "12"
end

startFromSameLine
strong "PixelForge Studio"
design itemTitle
layout "between"
end

start
muted "Bengaluru"
design meta
end

startFromSameLine
muted "2019 - 2022"
design meta
layout "between"
end

start
add "dot"
write "Delivered high-performing marketing and product pages for SaaS clients with strong Lighthouse and accessibility scores."
set spaceFromLeft "14"
set spaceFromTop "4"
end

start
add "dot"
write "Introduced reusable section primitives that cut landing page build time by 35%."
set spaceFromLeft "14"
end

start
add "dot"
write "Mentored 4 junior engineers across React architecture, testing, and UI craftsmanship."
set spaceFromLeft "14"
end

start
write "Selected Projects"
design section
end

start
strong "codeResume"
design itemTitle
end

startFromSameLine
badge "Product"
layout "between"
end

start
write "Built a code-first resume builder with reusable syntax, live preview, export tooling, and professional template presets."
set spaceFromTop "4"
end

start
muted "View Project"
design meta
set_url "https://example.com"
set decoration "underline"
set spaceFromBottom "8"
end

start
strong "Design System Starter"
design itemTitle
set spaceFromTop "10"
end

startFromSameLine
badge "Open Source"
layout "between"
end

start
write "Created a reusable starter kit for product teams adopting token-based theming, component documentation, and visual testing."
set spaceFromTop "4"
end

start
muted "github.com/example/design-system"
design meta
set decoration "underline"
set_url "https://github.com/example/design-system"
set spaceFromBottom "8"
end

start
write "Education"
design section
end

start
strong "B.Tech in Computer Science"
design itemTitle
end

startFromSameLine
muted "2015 - 2019"
design meta
layout "between"
end

start
muted "Visvesvaraya Technological University"
design meta
end

start
write "Certifications"
design section
end

start
muted "AWS Certified Cloud Practitioner | Google UX Design Certificate"
design meta
end`;

export default professional;
