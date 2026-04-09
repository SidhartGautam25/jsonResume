const fullstackSidebarPanel = `declare fullName="AARAV MEHTA"
declare title="Senior Fullstack Developer"
declare company="LaunchLayer"
declare location="Austin, TX"
declare phone="(512) 555-0192"
declare email="aarav.mehta@email.com"
declare githubLabel="github.com/aaravmehta"

start
init page
set padding "0"
set backgroundColor "#ffffff"
set bleed "18"
end

start
init global
set size "13"
set color "#223447"
set lineHeight "1.34"
set fontFamily "Arial, Helvetica, sans-serif"
end

start
init nameStyle
set fontFamily "Georgia, 'Times New Roman', serif"
set fontWeight "700"
set size "28"
set color "#1e2d3d"
end

start
init sectionHeading
set fontFamily "Georgia, 'Times New Roman', serif"
set fontWeight "700"
set size "16"
set color "#ffffff"
set transform "uppercase"
set backgroundColor "#2d5c8a"
set paddingTop "8"
set paddingBottom "8"
set paddingLeft "24"
set paddingRight "18"
end

start
init leftText
set color "#16324e"
set paddingLeft "24"
set paddingRight "18"
end

start
init leftMeta
set size "12"
set color "#4f6986"
set paddingLeft "24"
set paddingRight "18"
end

start
init leftBullet
set color "#16324e"
set size "12"
set lineHeight "1.2"
set hangingIndent "16"
set spaceFromLeft "14"
set paddingLeft "24"
set paddingRight "18"
end

start
init rightMeta
set size "12"
set color "#68798d"
end

start
init bulletTight
set size "12"
set lineHeight "1.22"
set hangingIndent "16"
set spaceFromLeft "14"
end

start
write "Education"
design sectionHeading
set column "left"
set columnWidth "31%"
set columnGap "0"
set columnBackgroundColor "#dbe7f5"
set columnPaddingBottom "24"
set spaceFromBottom "14"
end

start
write "B.S. Computer Science"
design leftText
set column "left"
set columnWidth "31%"
set size "15"
end

start
write "University of Washington"
design leftText
set column "left"
set columnWidth "31%"
set size "15"
end

start
muted "Seattle, WA"
design leftMeta
set column "left"
set columnWidth "31%"
set spaceFromBottom "2"
end

start
muted "2014 - 2018"
design leftMeta
set column "left"
set columnWidth "31%"
set spaceFromBottom "22"
end

start
write "Skills"
design sectionHeading
set column "left"
set columnWidth "31%"
set spaceFromBottom "14"
end

start
add "dot"
write "TypeScript, JavaScript, Python"
design leftBullet
set column "left"
set columnWidth "31%"
end

start
add "dot"
write "React, Next.js, Node.js"
design leftBullet
set column "left"
set columnWidth "31%"
end

start
add "dot"
write "PostgreSQL, Redis, GraphQL"
design leftBullet
set column "left"
set columnWidth "31%"
end

start
add "dot"
write "AWS, Docker, Kubernetes"
design leftBullet
set column "left"
set columnWidth "31%"
end

start
add "dot"
write "System design, CI/CD, performance tuning"
design leftBullet
set column "left"
set columnWidth "31%"
set spaceFromBottom "22"
end

start
write "Certifications"
design sectionHeading
set column "left"
set columnWidth "31%"
set spaceFromBottom "14"
end

start
add "dot"
write "AWS Certified Developer Associate"
design leftBullet
set column "left"
set columnWidth "31%"
end

start
add "dot"
write "Professional Scrum Master I"
design leftBullet
set column "left"
set columnWidth "31%"
set spaceFromBottom "22"
end

start
write "Links"
design sectionHeading
set column "left"
set columnWidth "31%"
set spaceFromBottom "14"
end

start
write "$email"
design leftText
set column "left"
set columnWidth "31%"
set size "12"
end

start
write "$phone"
design leftText
set column "left"
set columnWidth "31%"
set size "12"
end

start
write "$githubLabel"
design leftText
set column "left"
set columnWidth "31%"
set size "12"
end

start
write ""
set column "left"
set columnWidth "31%"
set height "remaining"
end

start
write "$fullName"
design nameStyle
set column "right"
set columnWidth "69%"
set columnBackgroundColor "#ffffff"
set columnPaddingTop "24"
set columnPaddingBottom "28"
set columnPaddingLeft "30"
set columnPaddingRight "28"
set spaceFromBottom "4"
end

start
write "$title"
set column "right"
set columnWidth "69%"
set size "17"
set color "#304255"
set spaceFromBottom "3"
end

start
strong "$company"
set column "right"
set columnWidth "69%"
set size "14"
set spaceFromBottom "8"
end

start
muted "May 2021 - Present"
design rightMeta
set column "right"
set columnWidth "69%"
layout "start"
gap "18"
set spaceFromBottom "10"
end

startFromSameLine
muted "$location"
design rightMeta
end

start
add "dot"
write "Led fullstack delivery for a multi-tenant workflow platform using Next.js, Node.js, and PostgreSQL, improving release velocity across 4 product squads"
design bulletTight
set column "right"
set columnWidth "69%"
set spaceFromTop "6"
end

start
add "dot"
write "Designed GraphQL APIs and background job pipelines for billing, notifications, and audit trails serving enterprise customers"
design bulletTight
set column "right"
set columnWidth "69%"
end

start
add "dot"
write "Reduced median dashboard load time by 41% through server-side rendering, query optimization, and asset delivery improvements"
design bulletTight
set column "right"
set columnWidth "69%"
end

start
add "dot"
write "Owned CI/CD workflows with GitHub Actions and containerized deployments on AWS, cutting failed release rollbacks significantly"
design bulletTight
set column "right"
set columnWidth "69%"
end

start
add "dot"
write "Mentored engineers on architecture reviews, testing discipline, and safer rollout patterns for high-impact backend changes"
design bulletTight
set column "right"
set columnWidth "69%"
set spaceFromBottom "24"
end

start
write "Fullstack Developer"
set column "right"
set columnWidth "69%"
set size "16"
set color "#304255"
set spaceFromBottom "2"
end

start
strong "Orbit Stack"
set column "right"
set columnWidth "69%"
set size "14"
set spaceFromBottom "8"
end

start
muted "June 2018 - April 2021"
design rightMeta
set column "right"
set columnWidth "69%"
layout "start"
gap "18"
set spaceFromBottom "10"
end

startFromSameLine
muted "Denver, CO"
design rightMeta
end

start
add "dot"
write "Built customer-facing dashboards and admin tools in React and Node.js for subscription management, analytics, and partner operations"
design bulletTight
set column "right"
set columnWidth "69%"
set spaceFromTop "6"
end

start
add "dot"
write "Implemented Redis-backed caching and queue workers that stabilized peak-hour traffic for reporting and search features"
design bulletTight
set column "right"
set columnWidth "69%"
end

start
add "dot"
write "Collaborated with design and product teams to ship reusable UI primitives and shorten the path from concept to production"
design bulletTight
set column "right"
set columnWidth "69%"
end

start
add "dot"
write "Introduced integration tests for access control and payments, reducing regression issues in core user flows"
design bulletTight
set column "right"
set columnWidth "69%"
set spaceFromBottom "24"
end

start
write "Projects"
design nameStyle
set column "right"
set columnWidth "69%"
set size "20"
set spaceFromBottom "10"
end

start
strong "Platform Migration Toolkit"
set column "right"
set columnWidth "69%"
set size "14"
set spaceFromBottom "6"
end

start
add "dot"
write "Created deployment and observability tooling that supported staged migrations from legacy services to modern containerized infrastructure"
design bulletTight
set column "right"
set columnWidth "69%"
end

start
strong "Developer Portal"
set column "right"
set columnWidth "69%"
set size "14"
set spaceFromTop "14"
set spaceFromBottom "6"
end

start
add "dot"
write "Built an internal portal for service ownership, runbooks, and environment visibility used by engineering and support teams"
design bulletTight
set column "right"
set columnWidth "69%"
end`;

export default fullstackSidebarPanel;
