const atsPro = `declare fullName="Arjun Mehta"
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
end`;

export default atsPro;
