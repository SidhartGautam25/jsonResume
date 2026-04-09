const modernProfileImageSplit = `declare fullName="Navneet Nishchal"
declare title="Software Engineer"
declare email="navneetnishchal1420@gmail.com"
declare phone="7461990368"
declare location="Gaya, Bihar"
declare profilePhoto="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80"

start
init page
set padding "22"
set backgroundColor "#ffffff"
end

start
init global
set size "13"
set color "#2f3640"
set lineHeight "1.34"
set fontFamily "Arial, Helvetica, sans-serif"
end

start
init heroName
set size "34"
set fontWeight "700"
set color "#20242b"
end

start
init heroRole
set size "20"
set fontWeight "700"
set color "#20242b"
end

start
init sectionHeading
set size "12"
set fontWeight "700"
set transform "uppercase"
set color "#3478f6"
set spaceFromBottom "10"
end

start
init meta
set size "12"
set color "#5f6c7b"
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
set alt "Profile photo"
set column "headerPhoto"
set columnWidth "138"
set columnGap "20"
set width "120"
set height "120"
set borderRadius "18"
set fit "cover"
end

start
write "$fullName"
design heroName
set column "headerInfo"
set columnWidth "1fr"
set spaceFromTop "8"
set spaceFromBottom "4"
end

start
write "$title"
design heroRole
set column "headerInfo"
set columnWidth "1fr"
set spaceFromBottom "12"
end

start
muted "$email"
design meta
set column "headerInfo"
set columnWidth "1fr"
layout "start"
gap "18"
end

startFromSameLine
muted "$phone"
design meta
end

startFromSameLine
muted "$location"
design meta
end

start
draw line
set color "#d7dde6"
set weight "1"
set spaceFromTop "16"
set spaceFromBottom "18"
end

start
write "Work Experience"
design sectionHeading
set column "main"
set columnWidth "66%"
set columnGap "32"
set spaceFromTop "28"
end

start
write "Skills"
design sectionHeading
set column "side"
set columnWidth "34%"
set spaceFromTop "28"
end

start
strong "CBRE"
set column "main"
set columnWidth "66%"
set size "17"
set spaceFromBottom "4"
end

start
add "dot"
write "Marketo"
set column "side"
set columnWidth "34%"
design bulletTight
end

start
write "Assistant Project Marketing Account Manager"
set column "main"
set columnWidth "66%"
set size "14"
set spaceFromBottom "4"
end

start
add "dot"
write "Salesforce"
set column "side"
set columnWidth "34%"
design bulletTight
end

start
muted "San Francisco, CA  |  April 2020 - current"
design meta
set column "main"
set columnWidth "66%"
set spaceFromBottom "10"
end

start
add "dot"
write "Google Ads"
set column "side"
set columnWidth "34%"
design bulletTight
end

start
add "dot"
write "Managed 60%+ projects assigned to the internal and external marketing departments"
set column "main"
set columnWidth "66%"
design bulletTight
end

start
add "dot"
write "Bing Ads"
set column "side"
set columnWidth "34%"
design bulletTight
end

start
add "dot"
write "Collaborated with 4 senior project managers and art directors to ensure the efficient and effective delivery of initiatives and outcomes"
set column "main"
set columnWidth "66%"
design bulletTight
end

start
add "dot"
write "Facebook Pixel"
set column "side"
set columnWidth "34%"
design bulletTight
end

start
add "dot"
write "Supported the management of marketing projects across 6+ departments and brands"
set column "main"
set columnWidth "66%"
design bulletTight
end

start
add "dot"
write "Verbal and Written Communication"
set column "side"
set columnWidth "34%"
design bulletTight
set spaceFromBottom "22"
end

start
add "dot"
write "Strategized with 3 marketing operations and communications teams to maintain project timelines based on priorities and deadlines"
set column "main"
set columnWidth "66%"
design bulletTight
end

start
write "Education"
design sectionHeading
set column "side"
set columnWidth "34%"
end

start
add "dot"
write "Collaborated with 2 creative and writing teams to assist in efficient communication and organization of daily tasks"
set column "main"
set columnWidth "66%"
design bulletTight
end

start
strong "Bachelor of Arts"
set column "side"
set columnWidth "34%"
set size "15"
set spaceFromBottom "4"
end

start
add "dot"
write "Implemented and communicated 30+ project updates to stakeholders and directors"
set column "main"
set columnWidth "66%"
design bulletTight
end

start
strong "Marketing"
set column "side"
set columnWidth "34%"
set size "15"
set spaceFromBottom "4"
end

start
add "dot"
write "Led tracking and managing analytics for project reporting on 8+ project types"
set column "main"
set columnWidth "66%"
design bulletTight
end

start
muted "UC Berkeley"
design meta
set column "side"
set columnWidth "34%"
set spaceFromBottom "4"
end

start
add "dot"
write "Monitored standard operating procedures and processes defined by senior project managers"
set column "main"
set columnWidth "66%"
design bulletTight
set spaceFromBottom "22"
end

start
muted "2016 - 2020"
design meta
set column "side"
set columnWidth "34%"
set spaceFromBottom "22"
end

start
strong "Workiva"
set column "main"
set columnWidth "66%"
set size "17"
set spaceFromBottom "4"
end

start
write "Certifications"
design sectionHeading
set column "side"
set columnWidth "34%"
end

start
write "Project Marketing Intern"
set column "main"
set columnWidth "66%"
set size "14"
set spaceFromBottom "4"
end

start
add "dot"
write "PCDM (Professional Certificate in Digital Marketing)"
set column "side"
set columnWidth "34%"
design bulletTight
end

start
muted "Berkeley, CA  |  January 2019 - April 2020"
design meta
set column "main"
set columnWidth "66%"
set spaceFromBottom "10"
end

start
add "dot"
write "Implemented details, executed projects, and worked with 4 other teams"
set column "main"
set columnWidth "66%"
design bulletTight
end

start
add "dot"
write "Analyzed success metrics and 200+ reports, recommending areas for improvement"
set column "main"
set columnWidth "66%"
design bulletTight
end

start
add "dot"
write "Assisted in managing 20+ marketing projects, programs, and events and ensured completion under tight deadlines"
set column "main"
set columnWidth "66%"
design bulletTight
end

start
add "dot"
write "Tracked and analyzed 100+ marketing projects and presented data to stakeholders and senior marketing directors"
set column "main"
set columnWidth "66%"
design bulletTight
end

start
add "dot"
write "Wrote and edited 50+ marketing materials, including brochures, blogs, and white papers"
set column "main"
set columnWidth "66%"
design bulletTight
end

start
add "dot"
write "Forecasted project revenue recognition against anticipated completion dates"
set column "main"
set columnWidth "66%"
design bulletTight
end`;

export default modernProfileImageSplit;
