// 2p game
const tpTitle=document.getElementById("mpTitle")
const subTitle=document.getElementById("mpSubTitle")
let opScorecard=document.getElementById("opScorecard")
const opRoll=document.getElementById("poRoll")
const opPass=document.getElementById("poPass")
const tpScorecard=document.getElementById("tpScorecard")
const tpRoll=document.getElementById("ptRoll")
const tpPass=document.getElementById("ptPass")
const restart=document.getElementById("restart")
const button=document.querySelectorAll("button")

// functions
const remove=(i)=>{
    i.style.display="none"
}
const unremove=(i)=>{
    i.style.display="block"
}
const gameover=(i) => {
    button.forEach(remove)
    unremove(restart)
    tpTitle.textContent=`P${i} WINS!`
    vAnimation(tpTitle)
    vAnimation(subTitle)
}
const critfail=(i) => {
    subTitle.textContent=`P${i} rolled a 1`
}
const natWin=(i)=>{
    subTitle.textContent=`P${i} reached 20`
}

// variables and events
let mScore={
    op:0,
    tp:0
}
opRoll.addEventListener("click",() => {
    diceroll()
    mScore.op+=thisRoll
    opScorecard.textContent=mScore.op
    if (thisRoll==1){
        gameover(2)
        critfail(1)
    }else if(mScore.op>=20){
        gameover(1)
        natWin(1)
    }
})
tpRoll.addEventListener("click",() => {
    diceroll()
    mScore.tp+=thisRoll
    tpScorecard.textContent=mScore.tp
    if (thisRoll==1){
        gameover(1)
        critfail(2)
    }else if(mScore.tp>=20){
        gameover(2)
        natWin(2)
    }
})
opPass.addEventListener("click",() => {
    remove(opRoll)
    remove(opPass)
    unremove(tpRoll)
    unremove(tpPass)
})
tpPass.addEventListener("click",() => {
    remove(tpRoll)
    remove(tpPass)
    unremove(opRoll)
    unremove(opPass)
})
restart.addEventListener("click",() => {
    unremove(opRoll)
    unremove(opPass)
    remove(restart)
    tpTitle.textContent="2P DICE GAME"
    subTitle.textContent="Roll a 1 and lose, reach 20 to win"
    mScore.op=0
    mScore.tp=0
    tpScorecard.textContent=mScore.tp
    opScorecard.textContent=mScore.op
    nAnimation(tpTitle)
    nAnimation(subTitle)
})