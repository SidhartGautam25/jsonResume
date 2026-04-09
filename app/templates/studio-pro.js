const studioPro = `declare fullName="Mira Kapoor"
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
end`;

export default studioPro;
