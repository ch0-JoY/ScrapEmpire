
const state = {
    money: 500,
    level: 1,
    carsScrapped: 0,
    currentCar: null
};

const cars = [
    {name:"Старый Хэтчбек", price:1200, rarity:"Обычная", icon:"🚗"},
    {name:"Ржавый Седан", price:1500, rarity:"Обычная", icon:"🚙"},
    {name:"Турбо Купе", price:3200, rarity:"Редкая", icon:"🏎️"},
    {name:"Falcon RS", price:7000, rarity:"Эпическая", icon:"🚘"}
];

function save(){
    localStorage.setItem("scrapEmpireSave", JSON.stringify(state));
}

function load(){
    const s = localStorage.getItem("scrapEmpireSave");
    if(!s) return;
    Object.assign(state, JSON.parse(s));
}

function updateUI(){
    const money=document.getElementById("money");
    const gameMoney=document.getElementById("gameMoney");
    const level=document.getElementById("level");
    const count=document.getElementById("carsCount");

    if(money) money.textContent=state.money;
    if(gameMoney) gameMoney.textContent=state.money;
    if(level) level.textContent=state.level;
    if(count) count.textContent=state.carsScrapped;
}

window.addEventListener("load",()=>{

    load();
    updateUI();

    setTimeout(()=>{
        document.getElementById("loadingScreen").classList.add("hidden");
        document.getElementById("menu").classList.remove("hidden");
    },1500);

    document.getElementById("playButton").onclick=()=>{
        document.getElementById("menu").classList.add("hidden");
        document.getElementById("gameScreen").classList.remove("hidden");
        updateUI();
    };

    document.getElementById("buyCar").onclick=()=>{

        const car=cars[Math.floor(Math.random()*cars.length)];
        state.currentCar=car;

        document.getElementById("carPlace").innerHTML=
        car.icon+
        "<br><h2>"+car.name+"</h2><p>"+car.rarity+"</p>";

        document.getElementById("disassemble").disabled=false;
    };

    document.getElementById("disassemble").onclick=()=>{

        if(!state.currentCar) return;

        state.money+=state.currentCar.price;
        state.carsScrapped++;

        if(state.carsScrapped%5===0){
            state.level++;
        }

        state.currentCar=null;

        document.getElementById("carPlace").innerHTML="🚗";

        document.getElementById("disassemble").disabled=true;

        save();
        updateUI();
    };

});
