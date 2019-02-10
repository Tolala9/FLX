let attemptsQuantity = 3;
let attempt;
let maxAttemptPrize;
let startMaxAttemptPrize;
let totalPrize = 0;
let winStatus = false;
let enteredNumber;

if (confirm("Do you want to play a game?")) {
	let maxNumberOfRange = 5;
	let gamePrize = 10;
	do {
		const randomNumber = Math.floor(Math.random() * (maxNumberOfRange + 1));
		attempt = attemptsQuantity;
		startMaxAttemptPrize = gamePrize;
		for (attempt; attempt > 0; attempt--) {
			if (attempt !== attemptsQuantity) {
				maxAttemptPrize = Math.floor(startMaxAttemptPrize / 2);
				startMaxAttemptPrize = maxAttemptPrize;
			} else {
				maxAttemptPrize = startMaxAttemptPrize;
			}
			enteredNumber = parseInt(prompt(
`Enter a number from 0 to ${maxNumberOfRange}
Attempts left: ${attempt}
Total prize: ${totalPrize}
Possible prize on current attempt: ${maxAttemptPrize}`
				));
			if (enteredNumber === randomNumber) {
				totalPrize += maxAttemptPrize;
				alert(`Congratulation! Your prize is: ${totalPrize}`);
				maxNumberOfRange *= 2;
				gamePrize *= 3;
				winStatus = true;
				break;
			} else {
				winStatus = false;
				continue;
			}
		}
		if (!winStatus) {
			alert(`Thank you for a game. Your prize is: ${totalPrize}`);			
			maxNumberOfRange = 5;
			totalPrize = 0;
			gamePrize = 10;
		} else {
			continue;
		}
	} while (confirm("Do you want to play a game again?"));
} else {
	alert("You did not become a millionaire, but can.");
}