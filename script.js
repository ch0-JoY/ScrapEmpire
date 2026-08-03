let cash=0;
const game=document.getElementById('game');
game.addEventListener('click',e=>{
 if(e.target.id==='crate'){
   game.innerHTML=`<div class='car'>🚙</div><h2>Rust Compact</h2><p>Common</p><button class='action' id='scrap'>Disassemble</button>`;
 }
 if(e.target.id==='scrap'){
   cash+=120;
   document.getElementById('cash').textContent=cash;
   game.innerHTML=`<div id='crate' class='crate'>📦</div><p id='hint'>Tap the next container</p>`;
 }
});
