let minNumber = 0;
let maxNumber = 5;
let attempts  = 3;

let firstAttemptprize 	= 10;
let seccondAttemptprize = 5;
let thirtAttemptprize 	= 2;

let prize			= 0;
let winStatus;

makeDecision();

function makeDecision() {
	let decision = confirm("Do you want to play a game?");
	if (decision) {
		runGame(minNumber, maxNumber);
	} else {
		alert("You did not become a millionaire, but can.");
	}
}

function creatingTask() {
	let task = `Enter a number from ${minNumber} to ${maxNumber}
Attempts left: 3 
Total prize: 10
Possible prize on current attempt: 30`;
	return task;
}

function runGame(minNumber, maxNumber) {
	let goalNumber = getRandomNumber(minNumber, maxNumber);
	for (var i = 0; i < attempts; i++) {
		console.log(goalNumber);
		let enteredNumber = parseInt(prompt(creatingTask()));
		if (isNaN(enteredNumber)) {
			alert("Invalid input data");
		} else {
			checkNumber(enteredNumber, goalNumber)
			// gameResult =
			if (winStatus && i == 0 ) {
				prize += firstAttemptprize;
			} else if (winStatus && i == 1 ) {
				prize += seccondAttemptprize;			
			} else if (winStatus && i == 2 ) {
				prize += thirtAttemptprize;			
			}
		}
	}
		alert(prize);
}

// function playGame(enteredNumber) {
// 	for (var i = 0; i < 3; i++) {
// 		enterNumber();
// 	}
// }

function checkNumber(enteredNumber, goalNumber) {
	if (goalNumber === enteredNumber) {
		alert("WIN");
		let winStatus = true;
	} else {
		alert(`Thank you for a game. Your prize is: ${prize}`);
		let winStatus = false;
	}
}


function getRandomNumber(minNumber, maxNumber) {
	return Math.floor(Math.random() * ((maxNumber + 1) - minNumber ) + minNumber);
}

function showTask(task) {
	prompt(task);
	return prompt(task);
}

// function gameResult {
// 	confirm()
// }