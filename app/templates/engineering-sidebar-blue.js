const engineeringSidebarBlue = `declare fullName="NORA BENNETT"
declare title="Senior Software Engineer"
declare company="Northstar Cloud"
declare location="Seattle, WA"
declare phone="(206) 555-0148"
declare email="nora.bennett@email.com"
declare github="github.com/norabennett"

start
init page
set padding "0"
end

start
init global
set size "13"
set color "#253245"
set lineHeight "1.34"
set fontFamily "Arial, Helvetica, sans-serif"
end

start
init serifSection
set fontFamily "Georgia, 'Times New Roman', serif"
set fontWeight "700"
set size "18"
set transform "uppercase"
set color "#1f2d3d"
end

start
init meta
set size "12"
set color "#6a7a8c"
end

start
init leftContent
set paddingLeft "28"
set paddingRight "22"
set color "#17324d"
end

start
init leftSection
set fontFamily "Georgia, 'Times New Roman', serif"
set fontWeight "700"
set size "18"
set transform "uppercase"
set color "#12304d"
set paddingLeft "28"
set paddingRight "22"
end

start
init leftMeta
set size "12"
set color "#4e6783"
set paddingLeft "28"
set paddingRight "22"
end

start
init bulletTight
set spaceFromLeft "14"
set hangingIndent "16"
set size "12"
set lineHeight "1.22"
end

start
init leftBullet
set spaceFromLeft "14"
set hangingIndent "16"
set size "12"
set lineHeight "1.22"
set color "#17324d"
set paddingLeft "28"
set paddingRight "22"
end

start
write ""
set column "left"
set columnWidth "31%"
set columnGap "0"
set columnBackgroundColor "#d9e8f7"
set columnPaddingTop "0"
set columnPaddingBottom "30"
set backgroundColor "#1f4d78"
set height "96"
set spaceFromBottom "28"
end

start
write "Education"
design leftSection
set column "left"
set columnWidth "31%"
set spaceFromBottom "12"
end

start
write "B.S. Computer Science"
set column "left"
set columnWidth "31%"
design leftContent
set size "15"
end

start
write "University of Washington"
set column "left"
set columnWidth "31%"
design leftContent
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
set spaceFromBottom "28"
end

start
write "Skills"
design leftSection
set column "left"
set columnWidth "31%"
set spaceFromBottom "12"
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
write "System design and performance tuning"
design leftBullet
set column "left"
set columnWidth "31%"
set spaceFromBottom "28"
end

start
write "Certifications"
design leftSection
set column "left"
set columnWidth "31%"
set spaceFromBottom "12"
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
set spaceFromBottom "28"
end

start
write "Links"
design leftSection
set column "left"
set columnWidth "31%"
set spaceFromBottom "12"
end

start
write "$email"
design leftContent
set column "left"
set columnWidth "31%"
set size "12"
end

start
write "$phone"
design leftContent
set column "left"
set columnWidth "31%"
set size "12"
end

start
write "$github"
design leftContent
set column "left"
set columnWidth "31%"
set size "12"
end

start
write "$fullName"
design serifSection
set column "right"
set columnWidth "69%"
set columnPaddingTop "26"
set columnPaddingBottom "30"
set columnPaddingLeft "30"
set columnPaddingRight "28"
set size "28"
set spaceFromBottom "4"
end

start
write "$title"
set column "right"
set columnWidth "69%"
set size "17"
set color "#2f3f52"
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
muted "March 2022 - Present"
design meta
set column "right"
set columnWidth "69%"
layout "start"
gap "18"
set spaceFromBottom "10"
end

startFromSameLine
muted "$location"
design meta
end

start
add "dot"
write "Led the migration of a high-traffic analytics platform from a legacy React stack to Next.js, cutting median page load time by 38%"
design bulletTight
set column "right"
set columnWidth "69%"
set spaceFromTop "6"
end

start
add "dot"
write "Designed a shared component system used across 5 product teams, reducing duplicated UI work and speeding feature delivery"
design bulletTight
set column "right"
set columnWidth "69%"
end

start
add "dot"
write "Built event-driven data pipelines with Node.js and PostgreSQL to support audit logs, reporting, and account-level activity tracking"
design bulletTight
set column "right"
set columnWidth "69%"
end

start
add "dot"
write "Improved Core Web Vitals and asset delivery strategy, raising Lighthouse performance scores from the low 70s to the mid 90s"
design bulletTight
set column "right"
set columnWidth "69%"
end

start
add "dot"
write "Mentored 4 engineers on code review quality, testing strategy, and rollout safety for production changes"
design bulletTight
set column "right"
set columnWidth "69%"
set spaceFromBottom "24"
end

start
write "Software Engineer"
set column "right"
set columnWidth "69%"
set size "16"
set color "#2f3f52"
set spaceFromBottom "2"
end

start
strong "Signal Forge"
set column "right"
set columnWidth "69%"
set size "14"
set spaceFromBottom "8"
end

start
muted "July 2018 - February 2022"
design meta
set column "right"
set columnWidth "69%"
layout "start"
gap "18"
set spaceFromBottom "10"
end

startFromSameLine
muted "Portland, OR"
design meta
end

start
add "dot"
write "Built internal tooling for release management, reducing manual deployment coordination work by roughly 12 hours per sprint"
design bulletTight
set column "right"
set columnWidth "69%"
set spaceFromTop "6"
end

start
add "dot"
write "Implemented GraphQL services and caching layers that improved dashboard response times for large enterprise accounts"
design bulletTight
set column "right"
set columnWidth "69%"
end

start
add "dot"
write "Partnered with product and support teams to translate recurring customer pain points into roadmap-ready technical improvements"
design bulletTight
set column "right"
set columnWidth "69%"
end

start
add "dot"
write "Introduced automated integration test coverage for critical billing and access-control flows"
design bulletTight
set column "right"
set columnWidth "69%"
set spaceFromBottom "24"
end

start
write "Selected Projects"
design serifSection
set column "right"
set columnWidth "69%"
set size "20"
set spaceFromBottom "10"
end

start
strong "Realtime Incident Console"
set column "right"
set columnWidth "69%"
set size "14"
set spaceFromBottom "6"
end

start
add "dot"
write "Created a monitoring console with live websocket updates, role-aware controls, and performance traces for support engineers"
design bulletTight
set column "right"
set columnWidth "69%"
end

start
strong "Design System Starter"
set column "right"
set columnWidth "69%"
set size "14"
set spaceFromTop "14"
set spaceFromBottom "6"
end

start
add "dot"
write "Published reusable primitives, documentation patterns, and accessibility guardrails used to standardize new product surfaces"
design bulletTight
set column "right"
set columnWidth "69%"
end`;

export default engineeringSidebarBlue;
