// 1p version

let scorecard=document.getElementById("scorecard");
const roll=document.getElementById("roll");
const restart=document.getElementById("restart");
let state=document.getElementById("gamestate");



let score=0
const gameover=() => {
    roll.style.display="none"
    restart.style.display="block"
    vAnimation(scorecard)
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
    nAnimation(scorecard)
})