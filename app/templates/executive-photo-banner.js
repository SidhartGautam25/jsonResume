const executivePhotoBanner = `declare fullName="ETHAN COLLINS"
declare title="Engineering Manager"
declare location="New York, NY"
declare email="ethan.collins@email.com"
declare phone="(917) 555-0124"
declare linkedin="linkedin.com/in/ethancollins"
declare profilePhoto="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80"

start
init page
set padding "18"
set backgroundColor "#f6f8fb"
end

start
init global
set size "13"
set color "#263445"
set lineHeight "1.36"
set fontFamily "Arial, Helvetica, sans-serif"
end

start
init heading
set fontFamily "Georgia, 'Times New Roman', serif"
set fontWeight "700"
set color "#17283b"
end

start
init meta
set size "12"
set color "#66778a"
end

start
image "$profilePhoto"
set alt "Portrait of Ethan Collins"
set column "photo"
set columnWidth "118"
set columnGap "20"
set width "112"
set height "112"
set borderRadius "20"
set fit "cover"
end

start
write "$fullName"
design heading
set column "identity"
set columnWidth "1fr"
set size "30"
set spaceFromBottom "6"
end

start
write "$title"
set column "identity"
set columnWidth "1fr"
set size "17"
set color "#304255"
set spaceFromBottom "6"
end

start
muted "$email"
design meta
set column "identity"
set columnWidth "1fr"
layout "start"
gap "18"
set spaceFromBottom "22"
end

startFromSameLine
muted "$phone"
design meta
end

startFromSameLine
muted "$location"
design meta
end

startFromSameLine
muted "$linkedin"
design meta
end

start
draw line
set color "#cbd5e1"
set weight "1"
set spaceFromBottom "18"
end

start
write "Profile"
design heading
set size "20"
set spaceFromBottom "10"
end

start
write "Engineering leader with 10+ years of experience building platform teams, developer tooling, and customer-facing SaaS systems across growth-stage environments."
set spaceFromBottom "18"
end

start
write "Experience"
design heading
set size "20"
set spaceFromBottom "10"
end

start
strong "Engineering Manager"
set size "15"
set spaceFromBottom "4"
end

start
muted "Atlas Systems | 2021 - Present | New York, NY"
design meta
set spaceFromBottom "10"
end

start
add "dot"
write "Managed 12 engineers across frontend and platform groups, aligning execution with roadmap, hiring, and operational goals"
set hangingIndent "16"
set spaceFromLeft "14"
set spaceFromBottom "4"
end

start
add "dot"
write "Improved delivery predictability by redesigning planning cadences, ownership boundaries, and release readiness reviews"
set hangingIndent "16"
set spaceFromLeft "14"
set spaceFromBottom "4"
end

start
add "dot"
write "Led migration toward shared infrastructure and internal developer tooling that reduced duplicate service work across teams"
set hangingIndent "16"
set spaceFromLeft "14"
set spaceFromBottom "18"
end

start
strong "Senior Software Engineer"
set size "15"
set spaceFromBottom "4"
end

start
muted "Mergepath | 2016 - 2021 | Brooklyn, NY"
design meta
set spaceFromBottom "10"
end

start
add "dot"
write "Designed React and Node.js architecture for multi-workspace analytics and reporting applications"
set hangingIndent "16"
set spaceFromLeft "14"
set spaceFromBottom "4"
end

start
add "dot"
write "Built internal observability and deployment tooling that improved incident response and release safety"
set hangingIndent "16"
set spaceFromLeft "14"
set spaceFromBottom "18"
end

start
write "Education"
design heading
set size "20"
set spaceFromBottom "10"
end

start
write "B.S. Software Engineering"
set size "15"
set spaceFromBottom "4"
end

start
muted "Rochester Institute of Technology | 2012 - 2016"
design meta
end`;

export default executivePhotoBanner;
