// 1p version

let scorecard=document.getElementById("scorecard");
const roll=document.getElementById("roll");
const restart=document.getElementById("restart");
let state=document.getElementById("gamestate");
const dice=document.getElementById("dice");

let diceImg={
    1:"images/1.png",
    2:"images/2.png",
    3:"images/3.png",
    4:"images/4.png",
    5:"images/5.png",
    6:"images/6.png",
}
let score=0
let thisRoll=0
const gameover=() => {
    roll.style.display="none"
    restart.style.display="block"
}
let diceroll=()=>{
    thisRoll=Math.floor(Math.random()*5.99+1)
    dice.src=diceImg[thisRoll]
    console.log(thisRoll)
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


// 2p game
let tptitle=document.getElementById("2pTitle")
let subTitle=document.getElementById("2pSubTitle")
