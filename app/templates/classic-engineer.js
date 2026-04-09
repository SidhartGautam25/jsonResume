const classicEngineer = `declare fullName="Unspecified Wolf"
declare location="Belleville, IL"
declare email="example@email.com"
declare phone="(555)123-4567"

start
init global
set spaceFromLeft "0"
set size "13"
set color "#111111"
set lineHeight "1.45"
set fontFamily "Georgia, 'Times New Roman', serif"
end

start
init classicBullet
set spaceFromLeft "14"
set hangingIndent "18"
end

start
headline "$fullName"
add "break"
write "$location"
add "break"
write "$email"
add "break"
write "$phone"
set borderLeftWidth "4"
set borderLeftColor "#111111"
set paddingLeft "28"
set spaceFromTop "10"
set spaceFromBottom "18"
set lineHeight "1.35"
set fontFamily "Arial, Helvetica, sans-serif"
end

start
strong "Summary"
set fontFamily "Arial, Helvetica, sans-serif"
set fontWeight "700"
set spaceFromBottom "8"
end

start
write "Strong civil engineer with 6 years of experience providing support to multiple team members in the office while maintaining accurate records, responding to customer communications and ensuring all construction documents were in compliance with the applicable codes."
set spaceFromBottom "14"
end

start
draw "line"
set color "#a3a3a3"
set weight "1"
set spaceFromBottom "14"
end

start
strong "Skills"
set fontFamily "Arial, Helvetica, sans-serif"
set fontWeight "700"
set spaceFromBottom "8"
end

start
write "Leadership, Communication Skills, Organizational Skills, Computer Skills, Microsoft Office, Project Management, Microstation"
set spaceFromBottom "14"
end

start
draw "line"
set color "#a3a3a3"
set weight "1"
set spaceFromBottom "14"
end

start
strong "Experience"
set fontFamily "Arial, Helvetica, sans-serif"
set fontWeight "700"
set spaceFromBottom "8"
end

start
strong "Civil Engineer"
set fontFamily "Arial, Helvetica, sans-serif"
set fontWeight "700"
set size "18"
set spaceFromBottom "4"
end

start
write "Citrixs Engineering · Las Vegas, Nevada"
set size "12"
end

start
write "December 2019 - Present"
set size "12"
set spaceFromBottom "4"
end

start
add "dot"
write "Performed construction activities on the projects, including surveying, geotech, blueprinting and site investigation"
design classicBullet
end

start
add "dot"
write "Developed new construction techniques, including a unique method for site excavation design"
design classicBullet
end

start
add "dot"
write "Conducted problem solving, team building and public outreach to prevent and resolve construction issues"
design classicBullet
end

start
add "dot"
write "Assisted in the training of 3 new civil engineers"
design classicBullet
set spaceFromBottom "12"
end

start
strong "Civil Engineer"
set fontFamily "Arial, Helvetica, sans-serif"
set fontWeight "700"
set size "18"
set spaceFromBottom "4"
end

start
write "Road Framework · Las Vegas, Nevada"
set size "12"
end

start
write "December 2017"
set size "12"
set spaceFromBottom "4"
end

start
add "dot"
write "Implemented a new stormwater retention plan for the City of Montreal, resulting in the creation of an additional 2000 square meters of land for development"
design classicBullet
end

start
add "dot"
write "Conceived a new building aesthetic and design for a new school, resulting in the addition of approximately 3000 square meters of usable space"
design classicBullet
end

start
add "dot"
write "Repaired damaged sidewalks and roads, repaired underground drainage and removed 100% of construction debris from site within 7 days"
design classicBullet
end

start
add "dot"
write "Researched and designed all new projects, including office space, parking lot and residential units"
design classicBullet
end

start
add "dot"
write "Worked closely with the CAD & GIS departments to ensure all work was accurately planned, measured and maintained"
design classicBullet
set spaceFromBottom "12"
end

start
strong "Project Manager"
set fontFamily "Arial, Helvetica, sans-serif"
set fontWeight "700"
set size "18"
set spaceFromBottom "4"
end

start
write "Pear · Las Vegas, Nevada"
set size "12"
end

start
write "December 2015"
set size "12"
set spaceFromBottom "4"
end

start
add "dot"
write "Researched, planned and managed the re-design of a large, complex website"
design classicBullet
end

start
add "dot"
write "Assisted in the development of new software products estimated to increase $100k in sales"
design classicBullet
end

start
add "dot"
write "Developed plans for working within budget and on-time delivery for 2 years in advance"
design classicBullet
end

start
add "dot"
write "Implemented a methodical 24-hour project management system to ensure maximum efficiency and productivity for the project"
design classicBullet
end

start
add "dot"
write "Created a spreadsheet for budgeting and tracking daily expenses, ensuring accurate forecasting and reporting for 3 months"
design classicBullet
set spaceFromBottom "14"
end

start
draw "line"
set color "#a3a3a3"
set weight "1"
set spaceFromBottom "14"
end

start
strong "Education"
set fontFamily "Arial, Helvetica, sans-serif"
set fontWeight "700"
set spaceFromBottom "8"
end

start
strong "Bachelor’s Degree in Civil Engineering"
set fontFamily "Arial, Helvetica, sans-serif"
set fontWeight "700"
set size "17"
set spaceFromBottom "4"
end

start
write "Lourdes Western University · Las Vegas, Nevada"
set size "12"
set spaceFromBottom "8"
end

start
draw "line"
set color "#a3a3a3"
set weight "1"
end`;

export default classicEngineer;
