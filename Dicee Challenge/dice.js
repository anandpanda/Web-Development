var r1 =  Math.floor(Math.random()*6)+1;
document.querySelector("img.img1").setAttribute("src","./images/dice"+r1+".png");

var r2 =  Math.floor(Math.random()*6)+1;
document.querySelector("img.img2").setAttribute("src","./images/dice"+r2+".png");

var res = "Draw!";

if(r1>r2) res = "🚩 Player 1 Wins!";
else if(r1<r2) res = "Player 2 Wins! 🚩";

document.querySelector("h1").innerHTML = res;