//Hangman Game


var wordToGuess= ["dark magician", "exodia","yugi", "pharoh","card","puzzle","blue eyes","shadow games", "egypt","heart of the cards"];
var exodia= ["exlleg","exrleg","exlarm","exrarm","head"]
var wordThusFar = "";
var badGuess =[];
var beenUsed ="";
var correcto = true;
var wrongCount =0
$(document).ready(function(){





//checks if letter has already been used
function usedAlready(letter){
	for(i=0; i<beenUsed.length;i++){
		if (letter==beenUsed.charAt(i)) {
			alert("The letter"+letter+ "has already been used");
			break;
		}
		else{
			isLetter(keystroke);
			// //appends and displays characters used
			// beenUsed = letter + beenUsed; 
			// $("#beenGuessed").html(beenUsed)
		}

	}
}


//shows a peice of exodia if the exodia
function wrongLetter(correct){


if(correct== false){
	//show pic and increment
	$('#'+exodia[wrongCount]).show();
	wrongCount++;
	correcto=true;

}
else{
	return;
}

}

// checks if letter is in word
function isLetter(letter){
	var rightLetter = 0;
	for(i=0; i<wordToGuess[j].length; i++)

		// compares letter at char
		if(letter==wordToGuess[j].charAt(i)){
			wordThusFar += letter;
			$('#guessSuccess').html("Enter a Letter to guess");
			rightLetter++;
		}
		// check for spaces and skips them
		else if (wordToGuess[j]==" ") {
			continue;
		}
		else if (rightLetter<=0) {
			correcto=false;
			wrongletter(correcto);
		} 
		beenUsed = beenUsed+letter;
		$("#beenGuessed").html(beenUsed);
		}

		
function game(){
 var j= Math.floor(Math.random()*10);

 	$('#intructions').html("Enter a Letter to guess");
	

 	while(wrongCount<7|| rightLetter!=wordToGuess.length){
 		//Takes in keystroke
 		$('#guessSuccess').on(function(){
	var keystroke =  $('#guessSuccess').val();
	});
 		usedAlready( keystroke );
 		
 		if (wrongCount==6) {
 			$('#intructions').html("You Lost, and Have unleashed the Forbidden one");
 		}
	}
 		if(rightLetter==wordToGuess.length){
 		$('#intructions').html("Congratulations, You kept the Forbidden one sealed");
 		}
 	}

});
