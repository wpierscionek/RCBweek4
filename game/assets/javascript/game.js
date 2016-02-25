$( document ).ready(function() {
    // console.log( "ready!" );
		var numberList = [20,22,30,40,46,49,50,58,62,68,64,69,82,91,93,110,115,120]; 
		var chosenNumber = 0;
		// game counters
		var winCounter = 0;
		var looseCounter = 0;
		var score = 0;
		// Audio
		var click = new Audio("click.wav");
		var victory = new Audio("victory.wav");
		var wrong = new Audio("wrong.wav");
		// Stone values
		var yellowStone = Math.floor((Math.random() * 10) +1);
		var diamondStone = Math.floor((Math.random() * 10) +1);
		var blueStone = Math.floor((Math.random() * 10) +1);
		var rubyStone = Math.floor((Math.random() * 10) +1);
		// console.log(yellowStone, diamondStone, blueStone, rubyStone);
		function updateScore() {
			$(".randomNumber").empty();
			$(".randomNumber").append(chosenNumber);
			$(".win").empty();
			$(".win").append(winCounter);
			$(".loose").empty();
			$(".loose").append(looseCounter);
			$(".score").empty();
			$(".score").append(score);
		}
		function startGame() {
			winCounter = 0;
			looseCounter = 0;
			score = 0;
			chosenNumber = numberList[Math.floor(Math.random() * numberList.length)];
		}
		function restart() {
			score = 0;
			chosenNumber = numberList[Math.floor(Math.random() * numberList.length)];
			yellowStone = Math.floor((Math.random() * 10) +1);
			diamondStone = Math.floor((Math.random() * 10) +1);
			blueStone = Math.floor((Math.random() * 10) +1);
			rubyStone = Math.floor((Math.random() * 10) +1);
			updateScore();
		}
		var logic = function () {
			if(score == chosenNumber) {
			winCounter++;
			$(".win").html = winCounter; 
			victory.play();
			restart();
		}
			else if( score > chosenNumber) {
			looseCounter++;
			$("#loose").html = looseCounter; 
			wrong.play();
			restart();
			
		}
			else {
				updateScore();
		}
		}
			$("#yellowStone").click(function(){
				 click.play();
				 click.currentTime = 0;
				 score = score + yellowStone;
				 logic();
			});
			$("#diamondStone").click(function(){
				 click.play();
				 click.currentTime = 0;
				 score = score + diamondStone;
				 logic();
			});
			$("#blueStone").click(function(){
				 click.play();
				 click.currentTime = 0;
				 score = score + blueStone;
				 logic();
			});
			$("#rubyStone").click(function(){
				click.play();
				click.currentTime = 0;
				score = score + rubyStone;
				logic();
			});
			startGame();
		});