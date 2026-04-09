const creative = `declare fullName="ALEX CHEN"
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
end`;

export default creative;
