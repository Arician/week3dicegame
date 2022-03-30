let scorecard=document.getElementById("scorecard");
const roll=document.getElementById("roll");
const restart=document.getElementById("restart");
let state=document.getElementById("gamestate");

let score=0
let thisRoll=0
const gameover=() => {
    roll.style.display="none"
    restart.style.display="block"
}
let diceroll=()=>{
    thisRoll=Math.floor(Math.random()*5+1)
}
const scoreupdate=() => {scorecard.textContent=score}
roll.addEventListener("click",() => {
    diceroll();
    score+=thisRoll
    scoreupdate();
    if(thisRoll==1){
        gameover()
        state.textContent="YOU LOSE!"
    }else if(score>=20){
        gameover()
        state.textContent="YOU WIN!"
    }
})
restart.addEventListener("click",() => {
    score=0
    scoreupdate()
    roll.style.display="block"
    restart.style.display="none"
    state.textContent=""
})