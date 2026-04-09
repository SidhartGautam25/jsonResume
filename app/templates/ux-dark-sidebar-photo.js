const uxDarkSidebarPhoto = `declare fullName="MAX JOHNSON"
declare title="UX Designer"
declare location="New York, USA"
declare phone="+1 2345 6789"
declare email="max.johnson@email.com"
declare profilePhoto="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80"

start
init page
set padding "0"
set backgroundColor "#ffffff"
set bleed "18"
end

start
init global
set size "13"
set color "#2c2c2c"
set lineHeight "1.34"
set fontFamily "Arial, Helvetica, sans-serif"
end

start
init sidebarHeading
set size "14"
set fontWeight "700"
set color "#ffffff"
set spaceFromBottom "10"
end

start
init sidebarText
set size "12"
set color "#d4dbe4"
set lineHeight "1.32"
end

start
init bodyHeading
set size "18"
set fontWeight "700"
set color "#171717"
set spaceFromBottom "4"
end

start
init bodyMeta
set size "11"
set color "#5a5a5a"
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
set alt "Portrait of Max Johnson"
set column "left"
set columnWidth "34%"
set columnGap "0"
set columnBackgroundColor "#262d36"
set columnPaddingTop "32"
set columnPaddingBottom "28"
set columnPaddingLeft "28"
set columnPaddingRight "28"
set width "104"
set height "104"
set borderRadius "999"
set fit "cover"
set spaceFromBottom "26"
end

start
write "Contact"
design sidebarHeading
set column "left"
set columnWidth "34%"
set spaceFromBottom "6"
end

start
draw line
set column "left"
set columnWidth "34%"
set color "#ffffff"
set weight "1"
set width "32"
set spaceFromBottom "12"
end

start
write "Address"
design sidebarText
set column "left"
set columnWidth "34%"
set fontWeight "700"
set spaceFromBottom "4"
end

start
write "$location"
design sidebarText
set column "left"
set columnWidth "34%"
set spaceFromBottom "12"
end

start
write "Phone"
design sidebarText
set column "left"
set columnWidth "34%"
set fontWeight "700"
set spaceFromBottom "4"
end

start
write "$phone"
design sidebarText
set column "left"
set columnWidth "34%"
set spaceFromBottom "12"
end

start
write "Email"
design sidebarText
set column "left"
set columnWidth "34%"
set fontWeight "700"
set spaceFromBottom "4"
end

start
write "$email"
design sidebarText
set column "left"
set columnWidth "34%"
set spaceFromBottom "28"
end

start
write "Skills"
design sidebarHeading
set column "left"
set columnWidth "34%"
set spaceFromBottom "6"
end

start
draw line
set column "left"
set columnWidth "34%"
set color "#ffffff"
set weight "1"
set width "32"
set spaceFromBottom "12"
end

start
add "dot"
write "Figma"
design sidebarText
set column "left"
set columnWidth "34%"
set hangingIndent "16"
set spaceFromLeft "14"
end

start
add "dot"
write "Adobe XD"
design sidebarText
set column "left"
set columnWidth "34%"
set hangingIndent "16"
set spaceFromLeft "14"
end

start
add "dot"
write "Sketch"
design sidebarText
set column "left"
set columnWidth "34%"
set hangingIndent "16"
set spaceFromLeft "14"
end

start
add "dot"
write "InVision"
design sidebarText
set column "left"
set columnWidth "34%"
set hangingIndent "16"
set spaceFromLeft "14"
end

start
add "dot"
write "Photoshop"
design sidebarText
set column "left"
set columnWidth "34%"
set hangingIndent "16"
set spaceFromLeft "14"
set spaceFromBottom "28"
end

start
write "Languages"
design sidebarHeading
set column "left"
set columnWidth "34%"
set spaceFromBottom "6"
end

start
draw line
set column "left"
set columnWidth "34%"
set color "#ffffff"
set weight "1"
set width "32"
set spaceFromBottom "12"
end

start
add "dot"
write "English"
design sidebarText
set column "left"
set columnWidth "34%"
set hangingIndent "16"
set spaceFromLeft "14"
end

start
add "dot"
write "French"
design sidebarText
set column "left"
set columnWidth "34%"
set hangingIndent "16"
set spaceFromLeft "14"
end

start
add "dot"
write "Russian"
design sidebarText
set column "left"
set columnWidth "34%"
set hangingIndent "16"
set spaceFromLeft "14"
set spaceFromBottom "28"
end

start
write "Hobbies"
design sidebarHeading
set column "left"
set columnWidth "34%"
set spaceFromBottom "6"
end

start
draw line
set column "left"
set columnWidth "34%"
set color "#ffffff"
set weight "1"
set width "32"
set spaceFromBottom "12"
end

start
add "dot"
write "Photography"
design sidebarText
set column "left"
set columnWidth "34%"
set hangingIndent "16"
set spaceFromLeft "14"
end

start
add "dot"
write "Football"
design sidebarText
set column "left"
set columnWidth "34%"
set hangingIndent "16"
set spaceFromLeft "14"
end

start
add "dot"
write "Cooking"
design sidebarText
set column "left"
set columnWidth "34%"
set hangingIndent "16"
set spaceFromLeft "14"
set spaceFromBottom "18"
end

start
write ""
set column "left"
set columnWidth "34%"
set height "remaining"
end

start
write "$fullName"
set column "right"
set columnWidth "66%"
set columnBackgroundColor "#ffffff"
set columnPaddingTop "52"
set columnPaddingBottom "34"
set columnPaddingLeft "30"
set columnPaddingRight "34"
set fontWeight "700"
set size "30"
set color "#111111"
set spaceFromBottom "6"
end

start
write "$title"
set column "right"
set columnWidth "66%"
set size "17"
set color "#363636"
set spaceFromBottom "36"
end

start
write "Profile"
design bodyHeading
set column "right"
set columnWidth "66%"
end

start
draw line
set column "right"
set columnWidth "66%"
set color "#171717"
set weight "1"
set width "40"
set spaceFromBottom "12"
end

start
write "Experienced UX Designer specializing in user research, interaction design, and prototyping. Committed to crafting intuitive and visually compelling digital experiences that captivate users. A problem-solver who combines creativity with data-driven insights to drive innovation."
set column "right"
set columnWidth "66%"
set size "12"
set spaceFromBottom "34"
end

start
write "Work Experience"
design bodyHeading
set column "right"
set columnWidth "66%"
end

start
draw line
set column "right"
set columnWidth "66%"
set color "#171717"
set weight "1"
set width "40"
set spaceFromBottom "14"
end

start
strong "Senior UX Designer"
set column "right"
set columnWidth "66%"
set size "15"
set spaceFromBottom "4"
end

start
muted "ABC Tech Solutions — New York"
design bodyMeta
set column "right"
set columnWidth "66%"
layout "start"
gap "18"
set spaceFromBottom "10"
end

startFromSameLine
muted "Jan 2020 — Dec 2022"
design bodyMeta
end

start
add "dot"
write "Led UX team for mobile banking app, boosting user engagement by 30% in six months."
design bulletTight
set column "right"
set columnWidth "66%"
end

start
add "dot"
write "Conducted in-depth user research, reducing e-commerce cart abandonment by 25% through redesign."
design bulletTight
set column "right"
set columnWidth "66%"
set spaceFromBottom "22"
end

start
strong "UX Designer"
set column "right"
set columnWidth "66%"
set size "15"
set spaceFromBottom "4"
end

start
muted "XYZ Design Agency — Texas"
design bodyMeta
set column "right"
set columnWidth "66%"
layout "start"
gap "18"
set spaceFromBottom "10"
end

startFromSameLine
muted "Jan 2018 — Dec 2019"
design bodyMeta
end

start
add "dot"
write "Collaborated with diverse clients to align designs with business objectives, achieving a 15% boost in healthcare app user satisfaction."
design bulletTight
set column "right"
set columnWidth "66%"
end

start
add "dot"
write "Conducted impactful user tests on a financial site, pinpointing pain points and driving a 20% surge in conversion rates."
design bulletTight
set column "right"
set columnWidth "66%"
set spaceFromBottom "34"
end

start
write "Education"
design bodyHeading
set column "right"
set columnWidth "66%"
end

start
draw line
set column "right"
set columnWidth "66%"
set color "#171717"
set weight "1"
set width "40"
set spaceFromBottom "14"
end

start
strong "Master of Science in HCI"
set column "right"
set columnWidth "66%"
set size "15"
set spaceFromBottom "4"
end

start
muted "New York University — New York"
design bodyMeta
set column "right"
set columnWidth "66%"
layout "start"
gap "18"
set spaceFromBottom "14"
end

startFromSameLine
muted "Jan 2016 — Dec 2018"
design bodyMeta
end

start
strong "Bachelor of Science in UX Design"
set column "right"
set columnWidth "66%"
set size "15"
set spaceFromBottom "4"
end

start
muted "University of Washington — Washington"
design bodyMeta
set column "right"
set columnWidth "66%"
layout "start"
gap "18"
end

startFromSameLine
muted "Jan 2011 — Dec 2015"
design bodyMeta
end`;

export default uxDarkSidebarPhoto;
