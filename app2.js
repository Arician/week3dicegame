// 2p game
const tptitle=document.getElementById("2pTitle")
const subTitle=document.getElementById("2pSubTitle")
let opScorecard=document.getElementById("1pScorecard")
const opRoll=document.getElementById("p1Roll")
const opPasses=document.getElementById("p1Pass")
const tpScorecard=document.getElementById("2pScorecard")
const tpRoll=document.getElementById("p2Roll")
const tpPasses=document.getElementById("p2Pass")


let mScore={
    op:0,
    tp:0
}
opRoll.addEventListener("click",() => {
    diceroll()
    mScore.op+=thisRoll
    opScorecard.textContent=mScore.op
})