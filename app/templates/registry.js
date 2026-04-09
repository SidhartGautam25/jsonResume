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
set lineHeight "1.55"
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
set color "#0f172a"
set spaceFromTop "20"
set spaceFromBottom "8"
set spaceFromLeft "0"
set transform "uppercase"
set letterSpacing "1"
set fontWeight "700"
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
muted "$role"
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
write "Skills"
design section
end

start
badge "JavaScript"
badge "TypeScript"
badge "React"
badge "Next.js"
badge "Node.js"
badge "AWS"
end

start
write "Work Experience"
design section
end

start
strong "Senior Web Developer"
set size "15"
set color "#000000"
end

startFromSameLine
muted "Tech Innovations Inc. | 2022 - Present"
set spaceFromLeft "15"
layout "between"
end

start
add "dot"
write "Spearheaded the migration of a monolithic platform to microservices using Node.js and Docker."
set spaceFromLeft "15"
set spaceFromTop "5"
end

start
add "dot"
write "Mentored a team of 5 junior developers and introduced modern React delivery standards."
set spaceFromLeft "15"
end

start
strong "Frontend Engineer"
set size "15"
set color "#000000"
set spaceFromTop "10"
end

startFromSameLine
muted "StartupX | 2020 - 2022"
set spaceFromLeft "15"
layout "between"
end

start
add "dot"
write "Designed and implemented a high-conversion landing page that improved user retention by 40%."
set spaceFromLeft "15"
set spaceFromTop "5"
end

start
write "Projects"
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
write "A custom scripting language parser built with Next.js for visual resume composition and live preview."
set spaceFromLeft "15"
set spaceFromTop "5"
end`,
  minimal: `declare fullName="JANE DOE"
declare title="Minimalist Product Engineer"

start
init global
set spaceFromLeft "10"
set size "12"
set color "#4b5563"
set lineHeight "1.55"
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
set size "13"
set color "#1f2937"
set spaceFromTop "28"
set spaceFromBottom "10"
set transform "uppercase"
set letterSpacing "1.2"
set fontWeight "700"
end

start
write "$fullName"
design big
end

start
muted "$title"
set spaceFromBottom "18"
end

start
write "Experience"
design section
end

start
strong "Software Developer"
end

startFromSameLine
muted "Apple Inc | 2018 - 2024"
layout "between"
end

start
add "dot"
write "Built core operating system components with a focus on maintainability and performance."
set spaceFromLeft "18"
end

start
write "Education"
design section
end

start
write "Computer Science, Stanford University"
set color "#4b5563"
end`,
  creative: `declare fullName="ALEX CHEN"
declare tagline="Creative Technologist • Product Storyteller • Interaction Designer"

start
init global
set spaceFromLeft "5"
set size "16"
set color "#111827"
set lineHeight "1.55"
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
set size "18"
set spaceFromTop "15"
set spaceFromBottom "10"
set transform "uppercase"
set letterSpacing "1.4"
set fontWeight "700"
end

start
write "$fullName"
design fancy
end

start
muted "$tagline"
set color "#6366f1"
set spaceFromBottom "20"
end

start
draw "line"
set weight "5"
set color "#ec4899"
end

start
write "Selected Strengths"
design box
end

start
badge "Visual Systems"
badge "Creative Direction"
badge "Prototype Craft"
badge "Frontend Motion"
end

start
write "Experience Snapshot"
design box
end

start
add "dot"
write "Led premium portfolio and campaign builds for product launches, conferences, and editorial brands."
end

start
add "dot"
write "Bridged design and engineering using React-based interactive systems and thoughtful motion."
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
end`,
  executive: `declare fullName="Priya Sharma"
declare title="Engineering Manager"
declare location="Mumbai, India"
declare email="priya@example.com"
declare phone="+91 98111 22334"
declare linkedinLabel="LinkedIn"
declare linkedinUrl="https://linkedin.com/in/priya"

start
init global
set spaceFromLeft "0"
set size "13"
set color "#1f2937"
set lineHeight "1.62"
end

start
init hero
set size "29"
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
set letterSpacing "1.5"
set spaceFromTop "20"
set spaceFromBottom "10"
end

start
init roleTitle
set size "14"
set color "#111827"
set fontWeight "700"
end

start
write "$fullName"
design hero
end

start
muted "$title"
set color "#4b5563"
set size "15"
set spaceFromBottom "12"
end

start
muted "$location"
design muted
layout "start"
gap "14"
end

startFromSameLine
add "pipe"
muted "$email"
design muted
set_url "mailto:$email"
end

startFromSameLine
add "pipe"
muted "$phone"
design muted
end

startFromSameLine
add "pipe"
write "$linkedinLabel"
design muted
set_url "$linkedinUrl"
set decoration "underline"
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
write "Engineering leader with a track record of scaling teams, improving delivery predictability, and aligning platform execution with product strategy in high-growth commerce environments."
end

start
write "Leadership Focus"
design section
end

start
badge "Team Scaling"
badge "Roadmap Planning"
badge "Hiring"
badge "Delivery Operations"
badge "Cross-functional Leadership"
badge "Platform Strategy"
end

start
write "Professional Experience"
design section
end

start
strong "Engineering Manager"
design roleTitle
end

startFromSameLine
strong "Orbit Commerce"
design roleTitle
layout "between"
end

start
muted "Mumbai"
design muted
end

startFromSameLine
muted "2021 - Present"
design muted
layout "between"
end

start
add "dot"
write "Scaled the frontend platform organization from 4 to 11 engineers across product and infrastructure pods."
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
write "Partnered with design, product, and data leadership to unify the customer account experience across web surfaces."
set spaceFromLeft "14"
end

start
strong "Senior Software Engineer"
design roleTitle
set spaceFromTop "12"
end

startFromSameLine
strong "Mercury Retail"
design roleTitle
layout "between"
end

start
muted "Bengaluru"
design muted
end

startFromSameLine
muted "2017 - 2021"
design muted
layout "between"
end

start
add "dot"
write "Owned critical checkout and account flows that supported multi-market rollouts and large seasonal traffic spikes."
set spaceFromLeft "14"
set spaceFromTop "4"
end

start
add "dot"
write "Mentored senior ICs into technical leadership roles and improved engineering calibration across teams."
set spaceFromLeft "14"
end

start
write "Education"
design section
end

start
strong "MBA, Technology Management"
design roleTitle
end

startFromSameLine
muted "SP Jain Institute of Management"
design muted
layout "between"
end

start
write "Board Reporting"
design section
end

start
write "Regular executive reporting covered delivery health, hiring velocity, roadmap confidence, platform risk, and customer experience priorities."
end`,
  ats_pro: `declare fullName="Arjun Mehta"
declare title="Software Engineer"
declare email="arjun@example.com"
declare phone="+91 99888 77665"
declare location="Pune, India"
declare linkedinLabel="LinkedIn"
declare linkedinUrl="https://linkedin.com/in/arjun"

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
set letterSpacing "1.2"
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
muted "$title"
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
add "pipe"
muted "$phone"
design meta
end

startFromSameLine
add "pipe"
muted "$location"
design meta
end

startFromSameLine
add "pipe"
write "$linkedinLabel"
design meta
set_url "$linkedinUrl"
end

start
write "Professional Summary"
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
muted "Pune"
design meta
end

startFromSameLine
muted "2021 - Present"
design meta
layout "between"
end

start
add "dot"
write "Built operational tooling that reduced manual reconciliation effort by 30% for finance and support teams."
set spaceFromLeft "14"
set spaceFromTop "4"
end

start
add "dot"
write "Implemented API integrations with payment and CRM platforms to improve data consistency and audit readiness."
set spaceFromLeft "14"
end

start
add "dot"
write "Improved deployment confidence with automated checks and practical monitoring across internal services."
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
  studio_pro: `declare fullName="Mira Kapoor"
declare title="Product Designer"
declare location="Delhi, India"
declare email="mira@example.com"
declare portfolioLabel="Portfolio"
declare portfolioUrl="https://mira.design"
declare dribbbleLabel="Dribbble"
declare dribbbleUrl="https://dribbble.com/mira"

start
init global
set spaceFromLeft "0"
set size "13"
set color "#243143"
set lineHeight "1.6"
end

start
init hero
set size "31"
set color "#111827"
set fontWeight "700"
set spaceFromBottom "5"
end

start
init accentSection
set size "12"
set color "#7c3aed"
set fontWeight "700"
set transform "uppercase"
set letterSpacing "1.8"
set spaceFromTop "20"
set spaceFromBottom "10"
end

start
init meta
set size "12"
set color "#6b7280"
end

start
write "$fullName"
design hero
end

start
muted "$title"
set size "15"
set color "#4b5563"
set spaceFromBottom "12"
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
write "$portfolioLabel"
design meta
set_url "$portfolioUrl"
set decoration "underline"
end

startFromSameLine
add "pipe"
write "$dribbbleLabel"
design meta
set_url "$dribbbleUrl"
set decoration "underline"
end

start
draw "line"
set weight "1"
set color "#ddd6fe"
set spaceFromTop "14"
set spaceFromBottom "16"
end

start
write "Profile"
design accentSection
end

start
write "Product designer focused on turning complex workflows into clear, elegant digital experiences across fintech and B2B SaaS."
end

start
write "Capabilities"
design accentSection
end

start
badge "UX Strategy"
badge "Design Systems"
badge "Prototyping"
badge "Research Synthesis"
badge "Cross-functional Collaboration"
end

start
write "Experience"
design accentSection
end

start
strong "Senior Product Designer"
set fontWeight "700"
set size "14"
end

startFromSameLine
strong "LatticeWorks"
set fontWeight "700"
set size "14"
layout "between"
end

start
muted "Remote"
design meta
end

startFromSameLine
muted "2021 - Present"
design meta
layout "between"
end

start
add "dot"
write "Led end-to-end redesign of a workflow builder used by enterprise operations teams, improving task completion by 22%."
set spaceFromLeft "14"
set spaceFromTop "4"
end

start
add "dot"
write "Built and maintained a scalable design system with reusable patterns across product and marketing surfaces."
set spaceFromLeft "14"
end

start
add "dot"
write "Facilitated product discovery, prototype validation, and design handoff with PM and engineering partners."
set spaceFromLeft "14"
end

start
strong "Product Designer"
set fontWeight "700"
set size "14"
set spaceFromTop "12"
end

startFromSameLine
strong "Harbor Studio"
set fontWeight "700"
set size "14"
layout "between"
end

start
muted "Delhi"
design meta
end

startFromSameLine
muted "2018 - 2021"
design meta
layout "between"
end

start
add "dot"
write "Designed responsive storytelling systems and polished product launch pages for SaaS, media, and education brands."
set spaceFromLeft "14"
set spaceFromTop "4"
end

start
add "dot"
write "Turned rough strategic ideas into clear interaction patterns, stronger visual hierarchy, and production-ready handoff."
set spaceFromLeft "14"
end

start
write "Selected Work"
design accentSection
end

start
strong "Workflow Builder Redesign"
set fontWeight "700"
end

startFromSameLine
badge "B2B SaaS"
layout "between"
end

start
write "Reframed a complex enterprise workflow experience into a simpler guided system with better progressive disclosure and stronger completion rates."
set spaceFromTop "4"
end

start
muted "View Case Study"
design meta
set decoration "underline"
set_url "$portfolioUrl"
set spaceFromBottom "8"
end

start
write "Education"
design accentSection
end

start
strong "B.Des. in Communication Design"
set fontWeight "700"
end

startFromSameLine
muted "National Institute of Design"
design meta
layout "between"
end

start
write "Tools"
design accentSection
end

start
badge "Figma"
badge "Framer"
badge "FigJam"
badge "Adobe CC"
badge "Design Systems"
end`,
  classic_engineer: `declare fullName="Unspecified Wolf"
declare location="Belleville, IL"
declare email="example@email.com"
declare phone="(555)123-4567"

start
init global
set spaceFromLeft "0"
set size "13"
set color "#111111"
set lineHeight "1.45"
set fontFamily "Georgia, 'Times New Roman', serif"
end

start
init classicBullet
set spaceFromLeft "14"
set hangingIndent "18"
end

start
headline "$fullName"
add "break"
write "$location"
add "break"
write "$email"
add "break"
write "$phone"
set borderLeftWidth "4"
set borderLeftColor "#111111"
set paddingLeft "28"
set spaceFromTop "10"
set spaceFromBottom "18"
set lineHeight "1.35"
set fontFamily "Arial, Helvetica, sans-serif"
end

start
strong "Summary"
set fontFamily "Arial, Helvetica, sans-serif"
set fontWeight "700"
set spaceFromBottom "8"
end

start
write "Strong civil engineer with 6 years of experience providing support to multiple team members in the office while maintaining accurate records, responding to customer communications and ensuring all construction documents were in compliance with the applicable codes."
set spaceFromBottom "14"
end

start
draw "line"
set color "#a3a3a3"
set weight "1"
set spaceFromBottom "14"
end

start
strong "Skills"
set fontFamily "Arial, Helvetica, sans-serif"
set fontWeight "700"
set spaceFromBottom "8"
end

start
write "Leadership, Communication Skills, Organizational Skills, Computer Skills, Microsoft Office, Project Management, Microstation"
set spaceFromBottom "14"
end

start
draw "line"
set color "#a3a3a3"
set weight "1"
set spaceFromBottom "14"
end

start
strong "Experience"
set fontFamily "Arial, Helvetica, sans-serif"
set fontWeight "700"
set spaceFromBottom "8"
end

start
strong "Civil Engineer"
set fontFamily "Arial, Helvetica, sans-serif"
set fontWeight "700"
set size "18"
set spaceFromBottom "4"
end

start
write "Citrixs Engineering · Las Vegas, Nevada"
set size "12"
end

start
write "December 2019 - Present"
set size "12"
set spaceFromBottom "4"
end

start
add "dot"
write "Performed construction activities on the projects, including surveying, geotech, blueprinting and site investigation"
design classicBullet
end

start
add "dot"
write "Developed new construction techniques, including a unique method for site excavation design"
design classicBullet
end

start
add "dot"
write "Conducted problem solving, team building and public outreach to prevent and resolve construction issues"
design classicBullet
end

start
add "dot"
write "Assisted in the training of 3 new civil engineers"
design classicBullet
set spaceFromBottom "12"
end

start
strong "Civil Engineer"
set fontFamily "Arial, Helvetica, sans-serif"
set fontWeight "700"
set size "18"
set spaceFromBottom "4"
end

start
write "Road Framework · Las Vegas, Nevada"
set size "12"
end

start
write "December 2017"
set size "12"
set spaceFromBottom "4"
end

start
add "dot"
write "Implemented a new stormwater retention plan for the City of Montreal, resulting in the creation of an additional 2000 square meters of land for development"
design classicBullet
end

start
add "dot"
write "Conceived a new building aesthetic and design for a new school, resulting in the addition of approximately 3000 square meters of usable space"
design classicBullet
end

start
add "dot"
write "Repaired damaged sidewalks and roads, repaired underground drainage and removed 100% of construction debris from site within 7 days"
design classicBullet
end

start
add "dot"
write "Researched and designed all new projects, including office space, parking lot and residential units"
design classicBullet
end

start
add "dot"
write "Worked closely with the CAD & GIS departments to ensure all work was accurately planned, measured and maintained"
design classicBullet
set spaceFromBottom "12"
end

start
strong "Project Manager"
set fontFamily "Arial, Helvetica, sans-serif"
set fontWeight "700"
set size "18"
set spaceFromBottom "4"
end

start
write "Pear · Las Vegas, Nevada"
set size "12"
end

start
write "December 2015"
set size "12"
set spaceFromBottom "4"
end

start
add "dot"
write "Researched, planned and managed the re-design of a large, complex website"
design classicBullet
end

start
add "dot"
write "Assisted in the development of new software products estimated to increase $100k in sales"
design classicBullet
end

start
add "dot"
write "Developed plans for working within budget and on-time delivery for 2 years in advance"
design classicBullet
end

start
add "dot"
write "Implemented a methodical 24-hour project management system to ensure maximum efficiency and productivity for the project"
design classicBullet
end

start
add "dot"
write "Created a spreadsheet for budgeting and tracking daily expenses, ensuring accurate forecasting and reporting for 3 months"
design classicBullet
set spaceFromBottom "14"
end

start
draw "line"
set color "#a3a3a3"
set weight "1"
set spaceFromBottom "14"
end

start
strong "Education"
set fontFamily "Arial, Helvetica, sans-serif"
set fontWeight "700"
set spaceFromBottom "8"
end

start
strong "Bachelor’s Degree in Civil Engineering"
set fontFamily "Arial, Helvetica, sans-serif"
set fontWeight "700"
set size "17"
set spaceFromBottom "4"
end

start
write "Lourdes Western University · Las Vegas, Nevada"
set size "12"
set spaceFromBottom "8"
end

start
draw "line"
set color "#a3a3a3"
set weight "1"
end`,
  community_intern_two_column: `declare fullName="BRYONY MARSH"
declare title="Summer Community Support Intern"
declare email="b.marsh@email.com"
declare phone="(123) 456-7890"
declare location="Cincinnati, OH"
declare linkedinLabel="LinkedIn"
declare linkedinUrl="https://linkedin.com/in/bryonymarsh"

start
init page
set borderWidth "4"
set borderColor "#111111"
set padding "22"
end

start
init global
set spaceFromLeft "0"
set size "13"
set color "#222222"
set lineHeight "1.22"
set fontFamily "Arial, Helvetica, sans-serif"
end

start
init serifHeading
set fontFamily "Georgia, 'Times New Roman', serif"
set fontWeight "700"
set color "#222222"
end

start
init sectionHeading
set fontFamily "Georgia, 'Times New Roman', serif"
set fontWeight "700"
set size "20"
set color "#222222"
set transform "uppercase"
set lineHeight "1.02"
end

start
init meta
set size "11"
set color "#5b5b5b"
end

start
init bulletCompact
set spaceFromLeft "14"
set hangingIndent "16"
set lineHeight "1.16"
set size "12"
end

start
write "$fullName"
design serifHeading
set size "28"
set lineHeight "1"
set spaceFromBottom "2"
end

start
write "$title"
design serifHeading
set size "22"
set lineHeight "1"
set spaceFromBottom "8"
end

start
muted "$email"
design meta
layout "start"
gap "18"
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
write "$linkedinLabel"
design meta
set decoration "underline"
set_url "$linkedinUrl"
set spaceFromBottom "14"
end

start
write "Projects"
design sectionHeading
set column "left"
set columnWidth "60%"
set columnGap "24"
end

start
draw "line"
set color "#111111"
set weight "2"
set column "left"
set columnWidth "60%"
end

start
write "\"Neighbor Up\""
design serifHeading
set size "18"
set column "left"
set columnWidth "60%"
set spaceFromTop "6"
end

start
strong "Surveyed and documented unmet needs within a defined school community"
set size "16"
set column "left"
set columnWidth "60%"
set spaceFromTop "2"
end

start
muted "Spring 2025"
design meta
set column "left"
set columnWidth "60%"
set spaceFromTop "4"
end

start
add "dot"
write "Surveyed 43 community members using a structured Microsoft Forms intake tool, capturing unmet needs across 6 resource categories for the first time in the school's outreach history."
design bulletCompact
set column "left"
set columnWidth "60%"
set spaceFromTop "4"
end

start
add "dot"
write "Categorized raw survey data in Google Sheets into a ranked priority matrix, cutting report compilation time from 3 hours to 47 minutes."
design bulletCompact
set column "left"
set columnWidth "60%"
end

start
add "dot"
write "Mapped 3 recurring resource gaps including food access, job readiness, and tutoring that directly shaped the outreach focus for the following semester's community programs."
design bulletCompact
set column "left"
set columnWidth "60%"
end

start
add "dot"
write "Delivered findings to a 7-member faculty review panel, fielding live questions and defending data-backed recommendations without notes."
design bulletCompact
set column "left"
set columnWidth "60%"
set spaceFromBottom "12"
end

start
write "\"Bridge Builders\""
design serifHeading
set size "18"
set column "left"
set columnWidth "60%"
end

start
strong "Organized and ran a structured peer support program connecting underclassmen with senior mentors"
set size "16"
set column "left"
set columnWidth "60%"
set spaceFromTop "2"
end

start
muted "Fall 2024"
design meta
set column "left"
set columnWidth "60%"
set spaceFromTop "4"
end

start
add "dot"
write "Launched a structured peer mentorship program pairing 19 underclassmen with senior mentors, achieving an 89% session attendance rate across an 11-week run."
design bulletCompact
set column "left"
set columnWidth "60%"
set spaceFromTop "4"
end

start
add "dot"
write "Designed all program flyers and session recap visuals in Canva, driving 12 new sign-up inquiries within 4 days of the second distribution cycle."
design bulletCompact
set column "left"
set columnWidth "60%"
end

start
add "dot"
write "Tracked weekly participation and mentor feedback across every session, flagging 2 at-risk mentorship pairs early enough to reassign and retain both participants."
design bulletCompact
set column "left"
set columnWidth "60%"
end

start
add "dot"
write "Sustained bi-weekly check-ins with each mentor-mentee pair through the semester, building trust-based consistency for peers."
design bulletCompact
set column "left"
set columnWidth "60%"
end

start
write "Career Objective"
design sectionHeading
set column "right"
set columnWidth "36%"
end

start
draw "line"
set color "#111111"
set weight "2"
set column "right"
set columnWidth "36%"
set spaceFromBottom "8"
end

start
write "A high school senior with hands-on community outreach and peer mentorship experience seeking a summer community support intern role. Ready to contribute directly to community-facing work through practical use of Microsoft Forms, Google Sheets, and Canva."
set column "right"
set columnWidth "36%"
set lineHeight "1.22"
end

start
write "Education"
design sectionHeading
set column "right"
set columnWidth "36%"
set spaceFromTop "18"
end

start
draw "line"
set color "#111111"
set weight "2"
set column "right"
set columnWidth "36%"
set spaceFromBottom "8"
end

start
strong "High School Diploma"
set size "18"
set column "right"
set columnWidth "36%"
end

start
strong "Walnut Hills High School"
set size "16"
set column "right"
set columnWidth "36%"
end

start
muted "2022 - current"
design meta
set column "right"
set columnWidth "36%"
set spaceFromTop "4"
end

start
muted "Cincinnati, OH"
design meta
set column "right"
set columnWidth "36%"
set spaceFromTop "2"
end

start
write "Skills"
design sectionHeading
set column "right"
set columnWidth "36%"
set spaceFromTop "18"
end

start
draw "line"
set color "#111111"
set weight "2"
set column "right"
set columnWidth "36%"
set spaceFromBottom "8"
end

start
add "dot"
write "Microsoft Forms"
design bulletCompact
set column "right"
set columnWidth "36%"
end

start
add "dot"
write "Google Sheets"
design bulletCompact
set column "right"
set columnWidth "36%"
end

start
add "dot"
write "Canva"
design bulletCompact
set column "right"
set columnWidth "36%"
end

start
add "dot"
write "Guest-Centered Resource Awareness"
design bulletCompact
set column "right"
set columnWidth "36%"
end

start
add "dot"
write "Community Trust Building"
design bulletCompact
set column "right"
set columnWidth "36%"
end`,
};
