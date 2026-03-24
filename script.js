const modes = [
"🔮","🗡","🪓","🛡️","❤️","🧪","♟️","💎"
];

let players = [
{name:"ChromeKing",discord:"https://discord.gg/example1",tiers:["HT1","HT1","LT1","HT1","HT1","HT1","LT1","LT1"]},
{name:"SkyPvP",discord:"https://discord.gg/example2",tiers:["HT2","LT1","HT2","HT1","LT1","HT2","HT1","LT1"]},
{name:"Coldified",discord:"https://discord.gg/example3",tiers:["LT1","LT1","LT1","HT2","HT2","LT3","HT1","LT2"]},
{name:"Swight",discord:"https://discord.gg/example4",tiers:["HT1","HT1","LT2","LT2","HT3","HT3","HT1","LT2"]}
];

const list = document.getElementById("list");
const searchInput = document.querySelector(".search");

function render(filter=""){

list.innerHTML="";

players
.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))
.forEach((p,i)=>{

let modesHTML = modes.map((icon,index)=>`
<div class="mode">
<div class="icon">${icon}</div>
<div class="tier">${p.tiers[index]}</div>
</div>
`).join("");

let row = document.createElement("div");
row.className="row";

row.innerHTML=`
<div class="left">
<div class="rank">${i+1}.</div>

<div class="player">
<img src="https://mc-heads.net/avatar/${p.name}" width="48">
<div class="name">${p.name}</div>
</div>
</div>

<div class="right">
<div class="modes">${modesHTML}</div>

<a href="${p.discord}" target="_blank" class="discord-btn">
Discord
</a>
</div>
`;

list.appendChild(row);

});

}

render();

/* SEARCH FUNCTION */
searchInput.addEventListener("input",(e)=>{
render(e.target.value);
});
