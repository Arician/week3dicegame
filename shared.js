const dice=document.getElementById("dice");
const vAnimation=(i)=>{
    i.style.animationName="victory"
}
const nAnimation=(i)=>{
    i.style.animationName="none"
}
let thisRoll=0
let diceroll=()=>{
    thisRoll=Math.floor(Math.random()*5.99+1)
    dice.src=`images/${thisRoll}.png`
}