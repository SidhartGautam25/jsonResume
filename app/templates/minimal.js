const minimal = `declare fullName="JANE DOE"
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
end`;

export default minimal;
