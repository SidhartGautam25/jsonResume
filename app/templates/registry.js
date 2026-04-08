export const templates = {
  full: `declare fullName="SIDHARTH G"
declare role="Lead Software Engineer | Web Architect"
declare portfolioLabel="Portfolio"
declare portfolioUrl="https://yoursite.com"
declare demoLabel="Live Demo"
declare demoUrl="https://example.com"

start
init global
set spaceFromLeft "5"
set size "14"
set color "#333333"
end

start
init header
set size "32"
set color "#0f172a"
set spaceFromTop "10"
set spaceFromBottom "5"
set spaceFromLeft "0"
set fontWeight "700"
end

start
init section
set size "18"
set color "#38bdf8"
set spaceFromTop "20"
set spaceFromBottom "8"
set spaceFromLeft "0"
set transform "uppercase"
end

start
init linkStyle
set color "#2563eb"
set size "12"
end

start
write "$fullName"
design header
end

startFromSameLine
write "$portfolioLabel"
design linkStyle
set spaceFromLeft "40"
set_url "$portfolioUrl"
layout "between"
end

start
write "$role"
set color "#64748b"
set size "14"
set spaceFromBottom "15"
set spaceFromLeft "0"
end

start
draw "line"
set weight "2"
set color "#e2e8f0"
set spaceFromLeft "0"
set spaceFromRight "0"
end

start
write "SKILLS"
design section
end

start
add "dot"
write "Languages: JavaScript, TypeScript, Python, C++"
end

start
add "dot"
write "Frameworks: React, Next.js, Node.js, Express, Django"
end

start
add "dot"
write "DevOps & Cloud: Docker, Kubernetes, AWS, Vercel"
end

start
write "WORK EXPERIENCE"
design section
end

start
strong "Senior Web Developer"
set size "15"
set color "#000000"
end

startFromSameLine
muted "Tech Innovations Inc. (2022 - Present)"
set spaceFromLeft "15"
layout "between"
end

start
write "Spearheaded the migration of monolithic architecture to microservices using Node.js and Docker."
set spaceFromLeft "15"
set spaceFromTop "5"
end

start
write "Mentored a team of 5 junior developers, establishing modern React best practices."
set spaceFromLeft "15"
end

start
strong "Frontend Engineer"
set size "15"
set color "#000000"
set spaceFromTop "10"
end

startFromSameLine
muted "StartupX (2020 - 2022)"
set spaceFromLeft "15"
layout "between"
end

start
write "Designed and implemented a high-conversion landing page resulting in 40% increased user retention."
set spaceFromLeft "15"
set spaceFromTop "5"
end

start
write "PROJECTS"
design section
end

start
strong "CodeResume Builder"
set size "15"
set color "#000000"
end

startFromSameLine
write "$demoLabel"
design linkStyle
set spaceFromLeft "15"
set_url "$demoUrl"
layout "between"
end

start
write "A custom scripting language parser built with Next.js mapping text commands to visual resume components."
set spaceFromLeft "15"
set spaceFromTop "5"
end

start
draw "line"
set weight "1"
set color "#e2e8f0"
set spaceFromTop "30"
set spaceFromLeft "0"
set spaceFromRight "0"
end`,
  minimal: `declare fullName="JANE DOE"
declare title="Minimalist Engineer"

start
init global
set spaceFromLeft "10"
set size "12"
set color "#4b5563"
end

start
init big
set size "28"
set color "#1f2937"
set spaceFromTop "10"
set spaceFromBottom "2"
set fontWeight "700"
end

start
init section
set size "14"
set color "#1f2937"
set spaceFromTop "30"
set spaceFromBottom "10"
set transform "uppercase"
end

start
write "$fullName"
design big
end

start
write "$title"
set color "#9ca3af"
set spaceFromBottom "20"
end

start
write "EXPERIENCE"
design section
end

start
write "Software Developer // Apple Inc // 2018 - 2024"
set color "#4b5563"
end

start
write "Built core operating system components."
set spaceFromLeft "20"
set spaceFromTop "5"
end

start
write "EDUCATION"
design section
end

start
write "Computer Science, Stanford University"
set color "#4b5563"
end`,
  creative: `declare fullName="ALEX CHEN"
declare tagline="Creative Technologist • Designer • Thinker"

start
init global
set spaceFromLeft "5"
set size "16"
set color "#000000"
end

start
init fancy
set size "40"
set color "#ec4899"
set spaceFromTop "20"
set spaceFromBottom "10"
set fontWeight "700"
end

start
init box
set color "#8b5cf6"
set size "20"
set spaceFromTop "15"
set spaceFromBottom "10"
end

start
write "$fullName"
design fancy
end

start
draw "line"
set weight "5"
set color "#ec4899"
end

start
write "$tagline"
set color "#6366f1"
set spaceFromTop "10"
set spaceFromBottom "20"
end

start
write "WHAT I DO"
design box
end

start
add "dot"
write "Frontend Magic"
end

start
add "dot"
write "Visual Interfaces"
end

start
add "dot"
write "Interactions Design"
end`,
  professional: `declare fullName="Sidharth Gupta"
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
set lineHeight "1.55"
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
set letterSpacing "1.4"
set spaceFromTop "18"
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
write "$title"
design roleLine
end

start
muted "$location"
design meta
layout "start"
gap "16"
end

startFromSameLine
muted "$email"
design meta
set_url "mailto:$email"
end

startFromSameLine
muted "$phone"
design meta
end

startFromSameLine
write "$portfolioLabel"
design meta
set_url "$portfolioUrl"
end

startFromSameLine
write "$linkedinLabel"
design meta
set_url "$linkedinUrl"
end

startFromSameLine
write "$githubLabel"
design meta
set_url "$githubUrl"
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
write "Frontend engineer with 6+ years of experience building performant product surfaces, design systems, and growth-driven web apps across SaaS and commerce."
end

start
write "Core Strengths"
design section
end

start
badge "TypeScript"
badge "React"
badge "Next.js"
badge "Design Systems"
badge "Accessibility"
badge "Performance"
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
write "Led migration of a legacy dashboard to Next.js, reducing page-load time by 42%."
set spaceFromLeft "14"
set spaceFromTop "4"
end

start
add "dot"
write "Built a shared component library used across 5 product teams and 3 customer-facing apps."
set spaceFromLeft "14"
end

start
add "dot"
write "Partnered with product and design to launch onboarding improvements that increased activation by 18%."
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
write "Delivered conversion-focused marketing pages for SaaS clients with strong Lighthouse scores."
set spaceFromLeft "14"
set spaceFromTop "4"
end

start
add "dot"
write "Introduced reusable section primitives that cut landing-page build time by 35%."
set spaceFromLeft "14"
end

start
add "dot"
write "Mentored 4 junior engineers on React architecture, accessibility, and UI testing."
set spaceFromLeft "14"
end

start
write "Projects"
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
write "A code-first resume builder with reusable variables, template presets, and live preview."
set spaceFromTop "4"
end

start
muted "View Project"
design meta
set_url "https://example.com"
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
end`,
  executive: `declare fullName="Priya Sharma"
declare title="Engineering Manager"
declare location="Mumbai, India"
declare email="priya@example.com"
declare linkedinLabel="LinkedIn"
declare linkedinUrl="https://linkedin.com/in/priya"

start
init global
set spaceFromLeft "0"
set size "13"
set color "#1f2937"
set lineHeight "1.6"
end

start
init hero
set size "28"
set color "#111827"
set fontWeight "700"
set spaceFromBottom "4"
end

start
init muted
set size "12"
set color "#6b7280"
end

start
init section
set size "12"
set color "#111827"
set fontWeight "700"
set transform "uppercase"
set letterSpacing "1.2"
set spaceFromTop "18"
set spaceFromBottom "10"
end

start
write "$fullName"
design hero
end

start
write "$title"
set color "#4b5563"
set size "15"
set spaceFromBottom "12"
end

start
muted "$location"
design muted
layout "start"
gap "16"
end

startFromSameLine
muted "$email"
design muted
set_url "mailto:$email"
end

startFromSameLine
write "$linkedinLabel"
design muted
set_url "$linkedinUrl"
end

start
draw "line"
set weight "1"
set color "#d1d5db"
set spaceFromTop "14"
set spaceFromBottom "16"
end

start
write "Leadership Profile"
design section
end

start
write "Engineering leader with a track record of scaling teams, improving delivery predictability, and aligning product strategy with platform execution."
end

start
write "Key Wins"
design section
end

start
badge "Team Scaling"
badge "Roadmap Ownership"
badge "Delivery Ops"
badge "Hiring"
badge "Stakeholder Management"
end

start
write "Experience"
design section
end

start
strong "Engineering Manager"
set fontWeight "700"
set size "14"
end

startFromSameLine
strong "Orbit Commerce"
set fontWeight "700"
set size "14"
layout "between"
end

start
muted "2021 - Present"
design muted
end

startFromSameLine
muted "Mumbai"
design muted
layout "between"
end

start
add "dot"
write "Grew the frontend platform team from 4 to 11 engineers across product and infrastructure pods."
set spaceFromLeft "14"
set spaceFromTop "4"
end

start
add "dot"
write "Introduced release health dashboards and quarterly planning rituals, improving on-time delivery by 27%."
set spaceFromLeft "14"
end

start
add "dot"
write "Partnered with design, product, and data leadership to unify the company’s customer account experience."
set spaceFromLeft "14"
end

start
write "Education"
design section
end

start
strong "MBA, Technology Management"
set fontWeight "700"
end

startFromSameLine
muted "SP Jain Institute of Management"
design muted
layout "between"
end`,
  ats_pro: `declare fullName="Arjun Mehta"
declare title="Software Engineer"
declare email="arjun@example.com"
declare phone="+91 99888 77665"
declare location="Pune, India"

start
init global
set spaceFromLeft "0"
set size "13"
set color "#111827"
set lineHeight "1.55"
end

start
init name
set size "24"
set color "#000000"
set fontWeight "700"
set spaceFromBottom "4"
end

start
init section
set size "12"
set color "#000000"
set fontWeight "700"
set transform "uppercase"
set spaceFromTop "18"
set spaceFromBottom "8"
end

start
init meta
set size "12"
set color "#4b5563"
end

start
write "$fullName"
design name
end

start
write "$title"
set size "14"
set color "#374151"
set spaceFromBottom "10"
end

start
muted "$email"
design meta
layout "start"
gap "14"
end

startFromSameLine
muted "$phone"
design meta
end

startFromSameLine
muted "$location"
design meta
end

start
write "Summary"
design section
end

start
write "Software engineer focused on product engineering, API integrations, and building reliable internal tools for operations teams."
end

start
write "Skills"
design section
end

start
strong "Languages:"
write " JavaScript, TypeScript, Python, SQL"
end

start
strong "Frameworks:"
write " React, Next.js, Node.js, Express"
end

start
strong "Tools:"
write " PostgreSQL, Docker, GitHub Actions, AWS"
end

start
write "Experience"
design section
end

start
strong "Software Engineer"
end

startFromSameLine
strong "Finstack Systems"
layout "between"
end

start
muted "2021 - Present"
design meta
end

startFromSameLine
muted "Pune"
design meta
layout "between"
end

start
add "dot"
write "Built operational tooling that reduced manual reconciliation effort by 30%."
set spaceFromLeft "14"
set spaceFromTop "4"
end

start
add "dot"
write "Implemented API integrations with payment and CRM platforms to improve data consistency."
set spaceFromLeft "14"
end

start
write "Education"
design section
end

start
strong "B.E. in Information Technology"
end

startFromSameLine
muted "2016 - 2020"
design meta
layout "between"
end

start
muted "Savitribai Phule Pune University"
design meta
end`,
};
