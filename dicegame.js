var rolls = 0;
var score = 0;

function playerNames(){
var player1 = prompt("Player1 Name");
}
playerNames();



function totalDiceScore(){
	var die1 = Math.floor(Math.random()*(4-1) + 1);
	var die2 = Math.floor(Math.random()*(6-1) + 1);
	var die3 = Math.floor(Math.random()*(8-1) + 1);
	var die4 = Math.floor(Math.random()*(10-1) + 1);
	var die5 = Math.floor(Math.random()*(12-1) + 1);
	var die6 = Math.floor(Math.random()*(20-1) + 1);
	var diceTotal = die1 + die2 + die3 + die4 + die5 + die6
	alert("Die1 Rolled: "+ die1 
		+ "\nDie2 Rolled: "+ die2 
		+ "\nDie3 Rolled: "+ die3 
		+ "\nDie4 Rolled: "+ die4 
		+ "\nDie5 Rolled: "+ die5 
		+ "\nDie6 Rolled: "+ die6);
	return diceTotal;
}


function diceScoring(diceTotal, score){
	score += diceTotal;
	var maxScore = 100;
if (score >= maxScore){
	alert("You Scored 100! Nice Job!");
	score = 0;
}
	return score;
}s

function maximumRolls(rolls){ 
	var maxRolls = 3;
	var maxScore = 100;
if (rolls === maxRolls && score < maxScore){
		alert("You Didn't Score 100! Try Again");
	rolls = 0;
	}
}

function diceButton(){
	var diceTotal = totalDiceScore();
	score = diceScoring(diceTotal, score);
	console.log(score);
	document.getElementById("score").innerHTML = score;
	rolls++;
	console.log(rolls);
	maximumRolls(rolls);

}