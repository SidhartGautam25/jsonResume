const royalBannerSidebar = `declare fullName="NAVNEET NISHCHAL"
declare title="SOFTWARE ENGINEER"
declare email="navneetnishchal1420@gmail.com"
declare phone="7461990368"
declare location="Gaya, Bihar"

start
init page
set padding "0"
set backgroundColor "#ffffff"
set bleed "18"
end

start
init global
set size "13"
set color "#2f3640"
set lineHeight "1.34"
set fontFamily "Arial, Helvetica, sans-serif"
end

start
init bannerName
set fontFamily "Georgia, 'Times New Roman', serif"
set fontWeight "700"
set size "38"
set letterSpacing "3"
set color "#ffffff"
set align "center"
end

start
init bannerRole
set fontFamily "Georgia, 'Times New Roman', serif"
set size "16"
set transform "uppercase"
set color "#ffffff"
set align "center"
end

start
init leftHeading
set fontFamily "Georgia, 'Times New Roman', serif"
set fontWeight "700"
set size "18"
set transform "uppercase"
set color "#2a2a2a"
set align "center"
end

start
init leftText
set size "12"
set color "#353535"
set align "center"
set paddingLeft "18"
set paddingRight "18"
end

start
init rightHeading
set fontFamily "Georgia, 'Times New Roman', serif"
set fontWeight "700"
set size "20"
set color "#2a2a2a"
end

start
init meta
set size "12"
set color "#5d6875"
end

start
init bulletTight
set size "12"
set lineHeight "1.22"
set hangingIndent "16"
set spaceFromLeft "14"
end

start
write "$fullName"
design bannerName
set backgroundColor "#15139a"
set paddingTop "30"
set paddingBottom "10"
end

start
write "$title"
design bannerRole
set backgroundColor "#15139a"
set paddingBottom "24"
set spaceFromBottom "0"
end

start
write "Contact Info"
design leftHeading
set column "left"
set columnWidth "30%"
set columnGap "0"
set columnBackgroundColor "#f1f1f1"
set columnPaddingTop "22"
set columnPaddingBottom "24"
set spaceFromBottom "12"
end

start
write "$email"
design leftText
set column "left"
set columnWidth "30%"
set spaceFromBottom "8"
end

start
write "$phone"
design leftText
set column "left"
set columnWidth "30%"
set spaceFromBottom "8"
end

start
write "$location"
design leftText
set column "left"
set columnWidth "30%"
set spaceFromBottom "28"
end

start
write "Education"
design leftHeading
set column "left"
set columnWidth "30%"
set spaceFromBottom "12"
end

start
write "Bachelor of Arts"
design leftText
set column "left"
set columnWidth "30%"
end

start
write "Marketing"
design leftText
set column "left"
set columnWidth "30%"
end

start
write "UC Berkeley"
design leftText
set column "left"
set columnWidth "30%"
end

start
muted "2016 - 2020"
design leftText
set column "left"
set columnWidth "30%"
set color "#666666"
set spaceFromBottom "28"
end

start
write "Skills"
design leftHeading
set column "left"
set columnWidth "30%"
set spaceFromBottom "12"
end

start
write "Marketo"
design leftText
set column "left"
set columnWidth "30%"
end

start
write "Salesforce"
design leftText
set column "left"
set columnWidth "30%"
end

start
write "Google Ads"
design leftText
set column "left"
set columnWidth "30%"
end

start
write "Bing Ads"
design leftText
set column "left"
set columnWidth "30%"
end

start
write "Facebook Pixel"
design leftText
set column "left"
set columnWidth "30%"
end

start
write "Verbal and Written Communication"
design leftText
set column "left"
set columnWidth "30%"
set spaceFromBottom "28"
end

start
write "Certifications"
design leftHeading
set column "left"
set columnWidth "30%"
set spaceFromBottom "12"
end

start
write "PCDM (Professional Certificate in Digital Marketing)"
design leftText
set column "left"
set columnWidth "30%"
set spaceFromBottom "22"
end

start
write ""
set column "left"
set columnWidth "30%"
set height "remaining"
end

start
write "Work Experience"
design rightHeading
set column "right"
set columnWidth "70%"
set columnBackgroundColor "#ffffff"
set columnPaddingTop "24"
set columnPaddingBottom "26"
set columnPaddingLeft "24"
set columnPaddingRight "24"
set transform "uppercase"
set spaceFromBottom "14"
end

start
write "Assistant Project Marketing Account Manager"
set column "right"
set columnWidth "70%"
set size "16"
set color "#333333"
set spaceFromBottom "6"
end

start
strong "CBRE"
set column "right"
set columnWidth "70%"
set size "14"
set spaceFromBottom "6"
end

start
muted "April 2020 - current  /  San Francisco, CA"
design meta
set column "right"
set columnWidth "70%"
set spaceFromBottom "12"
end

start
add "dot"
write "Managed 60%+ projects assigned to the internal and external marketing departments"
design bulletTight
set column "right"
set columnWidth "70%"
end

start
add "dot"
write "Collaborated with 4 senior project managers and art directors to ensure the efficient and effective delivery of initiatives and outcomes"
design bulletTight
set column "right"
set columnWidth "70%"
end

start
add "dot"
write "Supported the management of marketing projects across 6+ departments and brands"
design bulletTight
set column "right"
set columnWidth "70%"
end

start
add "dot"
write "Strategized with 3 marketing operations and communications teams to maintain project timelines based on priorities and deadlines"
design bulletTight
set column "right"
set columnWidth "70%"
end

start
add "dot"
write "Collaborated with 2 creative and writing teams to assist in efficient communication and organization of daily tasks"
design bulletTight
set column "right"
set columnWidth "70%"
end

start
add "dot"
write "Implemented and communicated 30+ project updates to stakeholders and directors"
design bulletTight
set column "right"
set columnWidth "70%"
end

start
add "dot"
write "Led tracking and managing analytics for project reporting on 8+ project types"
design bulletTight
set column "right"
set columnWidth "70%"
end

start
add "dot"
write "Monitored standard operating procedures and processes defined by senior project managers"
design bulletTight
set column "right"
set columnWidth "70%"
set spaceFromBottom "22"
end

start
write "Project Marketing Intern"
set column "right"
set columnWidth "70%"
set size "16"
set color "#333333"
set spaceFromBottom "4"
end

start
strong "Workiva"
set column "right"
set columnWidth "70%"
set size "14"
set spaceFromBottom "6"
end

start
muted "January 2019 - April 2020  /  Berkeley, CA"
design meta
set column "right"
set columnWidth "70%"
set spaceFromBottom "12"
end

start
add "dot"
write "Implemented details, executed projects, and worked with 4 other teams"
design bulletTight
set column "right"
set columnWidth "70%"
end

start
add "dot"
write "Analyzed success metrics and 200+ reports, recommending areas for improvement"
design bulletTight
set column "right"
set columnWidth "70%"
end

start
add "dot"
write "Assisted in managing 20+ marketing projects, programs, and events and ensured completion under tight deadlines"
design bulletTight
set column "right"
set columnWidth "70%"
end

start
add "dot"
write "Tracked and analyzed 100+ marketing projects and presented data to stakeholders and senior marketing directors"
design bulletTight
set column "right"
set columnWidth "70%"
end

start
add "dot"
write "Wrote and edited 50+ marketing materials, including brochures, blogs, and white papers"
design bulletTight
set column "right"
set columnWidth "70%"
end

start
add "dot"
write "Forecasted project revenue recognition against anticipated completion dates"
design bulletTight
set column "right"
set columnWidth "70%"
end`;

export default royalBannerSidebar;
