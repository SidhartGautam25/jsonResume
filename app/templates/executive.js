const executive = `declare fullName="Priya Sharma"
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
end`;

export default executive;
