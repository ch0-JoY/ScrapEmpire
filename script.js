
const cars=[
{name:"Rust Compact",rarity:"Common",price:120,icon:"🚙"},
{name:"Dust Pickup",rarity:"Common",price:150,icon:"🛻"},
{name:"Street Coupe",rarity:"Rare",price:300,icon:"🚗"},
{name:"Turbo GT",rarity:"Epic",price:700,icon:"🏎️"}
];

let money=Number(localStorage.getItem("money")||0);
let xp=0;
let level=Number(localStorage.getItem("level")||1);

const moneyEl=document.getElementById("money");
const levelEl=document.getElementById("level");
const xpBar=document.getElementById("xpBar");

moneyEl.textContent=money;
levelEl.textContent=level;

function openCrate(){
 const car=cars[Math.floor(Math.random()*cars.length)];
 document.getElementById("carName").textContent=car.name;
 document.getElementById("rarity").textContent=car.rarity;
 document.getElementById("gameArea").innerHTML=`
 <div class="car">${car.icon}</div>
 <h2>${car.name}</h2>
 <p>${car.rarity}</p>
 <button class="action" onclick="scrap(${car.price})">Disassemble (+$${car.price})</button>`;
}

function scrap(value){
 money+=value;
 xp+=25;
 if(xp>=100){
   xp=0;
   level++;
   levelEl.textContent=level;
 }
 moneyEl.textContent=money;
 xpBar.style.width=xp+"%";
 localStorage.setItem("money",money);
 localStorage.setItem("level",level);

 document.getElementById("gameArea").innerHTML=`
 <div id="crate" class="crate">📦</div>
 <p id="hint">Tap container</p>`;
 document.getElementById("crate").onclick=openCrate;
}

document.getElementById("crate").onclick=openCrate;
