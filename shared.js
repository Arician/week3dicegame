const dice=document.getElementById("dice");
const vAnimation=(i)=>{
    i.style.animationName="victory"
}
const nAnimation=(i)=>{
    i.style.animationName="none"
}
let thisRoll=0
let diceroll=()=>{
    thisRoll=Math.ceil(Math.random()*6)
    dice.src=`images/${thisRoll}.png`
}