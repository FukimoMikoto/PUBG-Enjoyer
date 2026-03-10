let kills = 0

function addKill(){

kills++

document.getElementById("killsCount").innerText = kills

}


function openCrate(){

let loot = [
"Level 3 Helmet",
"AWM Sniper",
"8x Scope",
"Ghillie Suit",
"Med Kit"
]

let reward = loot[Math.floor(Math.random()*loot.length)]

document.getElementById("lootText").innerText = "You got: " + reward

}


function playSound(){

let audio = document.getElementById("gunshot")

audio.play()

}