const communityInternTwoColumn = `declare fullName="BRYONY MARSH"
declare title="Summer Community Support Intern"
declare email="b.marsh@email.com"
declare phone="(123) 456-7890"
declare location="Cincinnati, OH"
declare linkedinLabel="LinkedIn"
declare linkedinUrl="https://linkedin.com/in/bryonymarsh"

start
init page
set borderWidth "4"
set borderColor "#111111"
set padding "22"
end

start
init global
set spaceFromLeft "0"
set size "13"
set color "#222222"
set lineHeight "1.22"
set fontFamily "Arial, Helvetica, sans-serif"
end

start
init serifHeading
set fontFamily "Georgia, 'Times New Roman', serif"
set fontWeight "700"
set color "#222222"
end

start
init sectionHeading
set fontFamily "Georgia, 'Times New Roman', serif"
set fontWeight "700"
set size "20"
set color "#222222"
set transform "uppercase"
set lineHeight "1.02"
end

start
init meta
set size "11"
set color "#5b5b5b"
end

start
init bulletCompact
set spaceFromLeft "14"
set hangingIndent "16"
set lineHeight "1.16"
set size "12"
end

start
write "$fullName"
design serifHeading
set size "28"
set lineHeight "1"
set spaceFromBottom "2"
end

start
write "$title"
design serifHeading
set size "22"
set lineHeight "1"
set spaceFromBottom "8"
end

start
muted "$email"
design meta
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
write "$linkedinLabel"
design meta
set decoration "underline"
set_url "$linkedinUrl"
set spaceFromBottom "14"
end

start
write "Projects"
design sectionHeading
set column "left"
set columnWidth "60%"
set columnGap "24"
end

start
draw "line"
set color "#111111"
set weight "2"
set column "left"
set columnWidth "60%"
end

start
write "\"Neighbor Up\""
design serifHeading
set size "18"
set column "left"
set columnWidth "60%"
set spaceFromTop "6"
end

start
strong "Surveyed and documented unmet needs within a defined school community"
set size "16"
set column "left"
set columnWidth "60%"
set spaceFromTop "2"
end

start
muted "Spring 2025"
design meta
set column "left"
set columnWidth "60%"
set spaceFromTop "4"
end

start
add "dot"
write "Surveyed 43 community members using a structured Microsoft Forms intake tool, capturing unmet needs across 6 resource categories for the first time in the school's outreach history."
design bulletCompact
set column "left"
set columnWidth "60%"
set spaceFromTop "4"
end

start
add "dot"
write "Categorized raw survey data in Google Sheets into a ranked priority matrix, cutting report compilation time from 3 hours to 47 minutes."
design bulletCompact
set column "left"
set columnWidth "60%"
end

start
add "dot"
write "Mapped 3 recurring resource gaps including food access, job readiness, and tutoring that directly shaped the outreach focus for the following semester's community programs."
design bulletCompact
set column "left"
set columnWidth "60%"
end

start
add "dot"
write "Delivered findings to a 7-member faculty review panel, fielding live questions and defending data-backed recommendations without notes."
design bulletCompact
set column "left"
set columnWidth "60%"
set spaceFromBottom "12"
end

start
write "\"Bridge Builders\""
design serifHeading
set size "18"
set column "left"
set columnWidth "60%"
end

start
strong "Organized and ran a structured peer support program connecting underclassmen with senior mentors"
set size "16"
set column "left"
set columnWidth "60%"
set spaceFromTop "2"
end

start
muted "Fall 2024"
design meta
set column "left"
set columnWidth "60%"
set spaceFromTop "4"
end

start
add "dot"
write "Launched a structured peer mentorship program pairing 19 underclassmen with senior mentors, achieving an 89% session attendance rate across an 11-week run."
design bulletCompact
set column "left"
set columnWidth "60%"
set spaceFromTop "4"
end

start
add "dot"
write "Designed all program flyers and session recap visuals in Canva, driving 12 new sign-up inquiries within 4 days of the second distribution cycle."
design bulletCompact
set column "left"
set columnWidth "60%"
end

start
add "dot"
write "Tracked weekly participation and mentor feedback across every session, flagging 2 at-risk mentorship pairs early enough to reassign and retain both participants."
design bulletCompact
set column "left"
set columnWidth "60%"
end

start
add "dot"
write "Sustained bi-weekly check-ins with each mentor-mentee pair through the semester, building trust-based consistency for peers."
design bulletCompact
set column "left"
set columnWidth "60%"
end

start
write "Career Objective"
design sectionHeading
set column "right"
set columnWidth "36%"
end

start
draw "line"
set color "#111111"
set weight "2"
set column "right"
set columnWidth "36%"
set spaceFromBottom "8"
end

start
write "A high school senior with hands-on community outreach and peer mentorship experience seeking a summer community support intern role. Ready to contribute directly to community-facing work through practical use of Microsoft Forms, Google Sheets, and Canva."
set column "right"
set columnWidth "36%"
set lineHeight "1.22"
end

start
write "Education"
design sectionHeading
set column "right"
set columnWidth "36%"
set spaceFromTop "18"
end

start
draw "line"
set color "#111111"
set weight "2"
set column "right"
set columnWidth "36%"
set spaceFromBottom "8"
end

start
strong "High School Diploma"
set size "18"
set column "right"
set columnWidth "36%"
end

start
strong "Walnut Hills High School"
set size "16"
set column "right"
set columnWidth "36%"
end

start
muted "2022 - current"
design meta
set column "right"
set columnWidth "36%"
set spaceFromTop "4"
end

start
muted "Cincinnati, OH"
design meta
set column "right"
set columnWidth "36%"
set spaceFromTop "2"
end

start
write "Skills"
design sectionHeading
set column "right"
set columnWidth "36%"
set spaceFromTop "18"
end

start
draw "line"
set color "#111111"
set weight "2"
set column "right"
set columnWidth "36%"
set spaceFromBottom "8"
end

start
add "dot"
write "Microsoft Forms"
design bulletCompact
set column "right"
set columnWidth "36%"
end

start
add "dot"
write "Google Sheets"
design bulletCompact
set column "right"
set columnWidth "36%"
end

start
add "dot"
write "Canva"
design bulletCompact
set column "right"
set columnWidth "36%"
end

start
add "dot"
write "Guest-Centered Resource Awareness"
design bulletCompact
set column "right"
set columnWidth "36%"
end

start
add "dot"
write "Community Trust Building"
design bulletCompact
set column "right"
set columnWidth "36%"
end`;

export default communityInternTwoColumn;
