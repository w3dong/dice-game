var name1 = prompt("Define a Name for player1") || "Player1";
var name2 = prompt("Define a Name for player2") || "Player2";

document.getElementById("player1").innerHTML = name1;
document.getElementById("player2").innerHTML= name2;

document.querySelector("a.myButton").onclick= function() {runDice()};
function runDice(){
  var random = Math.floor(Math.random()*6) + 1;
  var random2 = Math.floor(Math.random()*6) + 1;

  document.getElementById("dice1").src = "images/dice"+random+".png";
  document.getElementById("dice2").src = "images/dice"+random2+".png";
  // if player 1 wins
  if(random > random2){
    document.querySelector("h1").innerHTML = "✨"+name1+" wins✨";
  }
  // tie
  else if(random == random2){
    document.querySelector("h1").innerHTML = "There is a Tie👔";
  }
  // if player 2 wins
  else{
    document.querySelector("h1").innerHTML = "✨"+name2+" wins✨";
  }
}
