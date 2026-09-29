
// List of phrases for title subtext
let phrases = [
    "That Programmer",
    "Coffee Addict; not a caffiene addict...",
    "JavaScript Hater",
    "#include &lt;thatprogrammer.h&gt;",
    "Shoveling Silicon",
    "\"That's Too Abstract...\"",
    "Bit by Bit",
    "A different kind of architect...",
    "(<em>Not A Web Developer</em>)",
    "Doesn't Write Scripts!",
    "Not A Never-Nester",
    "LINUX!!!",
    "Open Source Nut",
    "Intel Fan",
    "Don't Push Before Optimizing!",
    "NO VIBE CODING ALLOWED",
    "Some Assembly required...",
    "No Frameworks Here!",
    "CompTIA!!!"
]

// Select phrase for title subtext
document.getElementById("title-subtext").innerHTML = phrases[Math.floor((Math.random()*100)%phrases.length)]

