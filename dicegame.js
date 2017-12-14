function playerNames(){
var player1 = prompt("Player1 Name");
}
playerNames();



function totalDiceScore(){
	var die1 = Math.floor(Math.random()*4);
	var die2 = Math.floor(Math.random()*6);
	var die3 = Math.floor(Math.random()*8);
	var die4 = Math.floor(Math.random()*10)
	var die5 = Math.floor(Math.random()*12);
	var die6 = Math.floor(Math.random()*20);
	var diceTotal = die1 + die2 + die3 + die4 + die5 + die6
	alert("Die1 Rolled: "+ die1 + "Die2 Rolled: "+ die2 + "Die3 Rolled: "+ die3 + "Die4 Rolled: "+ die4 + "Die5 Rolled:"+ die5 + "Die6 Rolled: "+ die6);
	return diceTotal;
}


function diceScoring(diceTotal, score){
	score += diceTotal;
	var maxScore = 100;
if (score >= maxScore){
	alert("You Win!");
}

}

function maximumRolls(){
	var rolls = 0;
	var maxRolls = 8;
if (rolls === maxRolls && score < maxScore){
		alert("You Lose");
		return rolls;
}
}

var score = 0;
var rolls = 0;
function diceButton(){
	var diceTotal = totalDiceScore();
	diceScoring(diceTotal, score);
	var rolls = maximumRolls();

}