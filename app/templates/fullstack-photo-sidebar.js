const fullstackPhotoSidebar = `declare fullName="MAYA FERNANDEZ"
declare title="Lead Fullstack Developer"
declare email="maya.fernandez@email.com"
declare phone="(415) 555-0138"
declare location="San Francisco, CA"
declare github="github.com/mayafernandez"
declare portfolio="mayafernandez.dev"
declare profilePhoto="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80"

start
init page
set padding "0"
set bleed "18"
set backgroundColor "#ffffff"
end

start
init global
set size "13"
set color "#1f2937"
set lineHeight "1.34"
set fontFamily "Arial, Helvetica, sans-serif"
end

start
init sidebarHeading
set fontFamily "Georgia, 'Times New Roman', serif"
set fontWeight "700"
set size "15"
set color "#ffffff"
set transform "uppercase"
set backgroundColor "#133b63"
set paddingTop "8"
set paddingBottom "8"
set paddingLeft "24"
set paddingRight "18"
end

start
init sidebarText
set paddingLeft "24"
set paddingRight "18"
set color "#16324d"
end

start
init sidebarMeta
set paddingLeft "24"
set paddingRight "18"
set size "12"
set color "#506782"
end

start
init bulletTight
set size "12"
set lineHeight "1.22"
set hangingIndent "16"
set spaceFromLeft "14"
end

start
image "$profilePhoto"
set alt "Portrait of Maya Fernandez"
set column "left"
set columnWidth "32%"
set columnGap "0"
set columnBackgroundColor "#dbe8f6"
set columnPaddingTop "26"
set columnPaddingBottom "26"
set width "112"
set height "112"
set borderRadius "999"
set fit "cover"
set spaceFromLeft "24"
set spaceFromBottom "18"
end

start
write "Contact"
design sidebarHeading
set column "left"
set columnWidth "32%"
set spaceFromBottom "14"
end

start
write "$email"
design sidebarText
set column "left"
set columnWidth "32%"
set size "12"
end

start
write "$phone"
design sidebarText
set column "left"
set columnWidth "32%"
set size "12"
end

start
write "$location"
design sidebarText
set column "left"
set columnWidth "32%"
set size "12"
end

start
write "$github"
design sidebarText
set column "left"
set columnWidth "32%"
set size "12"
end

start
write "$portfolio"
design sidebarText
set column "left"
set columnWidth "32%"
set size "12"
set spaceFromBottom "22"
end

start
write "Core Skills"
design sidebarHeading
set column "left"
set columnWidth "32%"
set spaceFromBottom "14"
end

start
add "dot"
write "TypeScript, Node.js, React, Next.js"
design sidebarText
set column "left"
set columnWidth "32%"
set hangingIndent "16"
set spaceFromLeft "14"
end

start
add "dot"
write "GraphQL, PostgreSQL, Redis"
design sidebarText
set column "left"
set columnWidth "32%"
set hangingIndent "16"
set spaceFromLeft "14"
end

start
add "dot"
write "AWS, Docker, CI/CD pipelines"
design sidebarText
set column "left"
set columnWidth "32%"
set hangingIndent "16"
set spaceFromLeft "14"
end

start
add "dot"
write "System design and platform modernization"
design sidebarText
set column "left"
set columnWidth "32%"
set hangingIndent "16"
set spaceFromLeft "14"
set spaceFromBottom "22"
end

start
write "Education"
design sidebarHeading
set column "left"
set columnWidth "32%"
set spaceFromBottom "14"
end

start
write "B.S. Computer Engineering"
design sidebarText
set column "left"
set columnWidth "32%"
set size "14"
end

start
write "Santa Clara University"
design sidebarText
set column "left"
set columnWidth "32%"
set size "14"
end

start
muted "2013 - 2017"
design sidebarMeta
set column "left"
set columnWidth "32%"
set spaceFromBottom "18"
end

start
write ""
set column "left"
set columnWidth "32%"
set height "remaining"
end

start
write "$fullName"
set column "right"
set columnWidth "68%"
set columnBackgroundColor "#ffffff"
set columnPaddingTop "28"
set columnPaddingBottom "30"
set columnPaddingLeft "30"
set columnPaddingRight "28"
set fontFamily "Georgia, 'Times New Roman', serif"
set fontWeight "700"
set size "30"
set color "#16283c"
set spaceFromBottom "4"
end

start
write "$title"
set column "right"
set columnWidth "68%"
set size "17"
set color "#304255"
set spaceFromBottom "14"
end

start
write "Experience"
set column "right"
set columnWidth "68%"
set fontFamily "Georgia, 'Times New Roman', serif"
set fontWeight "700"
set size "20"
set color "#16283c"
set spaceFromBottom "12"
end

start
strong "Lead Fullstack Developer"
set column "right"
set columnWidth "68%"
set size "15"
set spaceFromBottom "4"
end

start
muted "Northgrid Labs | 2021 - Present | San Francisco, CA"
set column "right"
set columnWidth "68%"
set size "12"
set color "#64748b"
set spaceFromBottom "10"
end

start
add "dot"
write "Led platform modernization across frontend and backend services, reducing onboarding time for new teams by 45%"
design bulletTight
set column "right"
set columnWidth "68%"
end

start
add "dot"
write "Designed shared APIs and React primitives used across 6 internal products"
design bulletTight
set column "right"
set columnWidth "68%"
end

start
add "dot"
write "Improved release safety with automated integration coverage and canary deployment workflows"
design bulletTight
set column "right"
set columnWidth "68%"
set spaceFromBottom "18"
end

start
strong "Fullstack Engineer"
set column "right"
set columnWidth "68%"
set size "15"
set spaceFromBottom "4"
end

start
muted "Cloudframe | 2017 - 2021 | Oakland, CA"
set column "right"
set columnWidth "68%"
set size "12"
set color "#64748b"
set spaceFromBottom "10"
end

start
add "dot"
write "Built subscription, analytics, and admin tooling with React, Node.js, and PostgreSQL for B2B SaaS customers"
design bulletTight
set column "right"
set columnWidth "68%"
end

start
add "dot"
write "Introduced Redis-backed caching strategies that cut repeated reporting queries dramatically"
design bulletTight
set column "right"
set columnWidth "68%"
set spaceFromBottom "18"
end

start
write "Projects"
set column "right"
set columnWidth "68%"
set fontFamily "Georgia, 'Times New Roman', serif"
set fontWeight "700"
set size "20"
set color "#16283c"
set spaceFromBottom "12"
end

start
strong "Incident Command Console"
set column "right"
set columnWidth "68%"
set size "15"
set spaceFromBottom "6"
end

start
add "dot"
write "Developed a live incident management surface with websocket updates, trace visibility, and role-based workflows"
design bulletTight
set column "right"
set columnWidth "68%"
end`;

export default fullstackPhotoSidebar;
