const bgs = [
    "https://i.imgur.com/SP2xHL3.jpeg",
    "https://i.imgur.com/HoUiBhz.jpeg",
    "https://i.imgur.com/FvWg9zV.jpeg",
    "https://i.imgur.com/T0GFRXd.jpeg",
    "https://i.imgur.com/70zwvaw.jpeg",
    "https://i.imgur.com/MD19R7u.jpeg",
    "https://i.imgur.com/jTV7gAL.jpeg",
    "https://i.imgur.com/ErYTby3.jpeg",
    "https://i.imgur.com/mCW4H8I.jpeg",
    "https://i.imgur.com/rcAHMXW.jpeg",
    "https://i.imgur.com/t1fZJLV.jpeg",
    "https://i.imgur.com/xzwKlHV.jpeg",
    "https://i.imgur.com/ebeYP9P.jpeg",
    "https://i.imgur.com/xfC6dsf.jpeg",
    "https://i.imgur.com/HVq7Ub8.jpeg",
    "https://i.imgur.com/bV5iTAx.jpeg",
    "https://i.imgur.com/oFlO3QE.jpeg",
    "https://i.imgur.com/cGDNW6J.jpeg",
    "https://i.imgur.com/rVxlYXq.jpeg",
    "https://i.imgur.com/Sqv0ewy.jpeg"
];

const randomBg = bgs[Math.floor(Math.random() * bgs.length)];
const bgBox = document.querySelector("#background");

bgBox.style.backgroundRepeat = "no-repeat";
bgBox.style.backgroundImage = `url(${randomBg})`;
bgBox.style.backgroundSize = window.innerHeight;
