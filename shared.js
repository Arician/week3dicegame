const dice=document.getElementById("dice");
let diceImg={
    1:"images/1.png",
    2:"images/2.png",
    3:"images/3.png",
    4:"images/4.png",
    5:"images/5.png",
    6:"images/6.png",
}
let thisRoll=0
let diceroll=()=>{
    thisRoll=Math.floor(Math.random()*5.99+1)
    dice.src=diceImg[thisRoll]
}