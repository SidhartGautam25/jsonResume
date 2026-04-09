const full = `declare fullName="SIDHARTH G"
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
end`;

export default full;
