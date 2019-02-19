function userCard(index) {
	let key = index;
	let	balance = 100;
	let transactionLimit = 100;
	let historyLogs = [];  
	let taxes = 0.005;
	

	function historyLogWrite(operationType, credits) {
		let time = new Date().toLocaleString('en-GB');
		historyLogs.push({
			operationType: operationType,
			credits: credits,
			operationTime: time
		})
	}

	const cardMethods = {
		getCardOptions: function() {
			return { balance, transactionLimit, historyLogs, key };
		},
		putCredits: function(amount) {
			balance += amount;
			historyLogWrite("Received credits", amount);
		},
		takeCredits: function(amount) {
			if (transactionLimit < amount ) {
				console.error("Your transaction limit of card is exhausted!");
			} else if(balance < amount ){
				console.error("Your card balance is exhausted!");
			} else {
				balance -= amount;
				historyLogWrite("Withdrawal of credits", amount);
			}
		},
		setTransactionLimit: function(amount) {
			transactionLimit = amount;
			historyLogWrite("Transaction limit change", amount);
		},
		transferCredits: function(amount, receiverCard) {
			let transferAmount = (amount * taxes) + amount;
			if (transactionLimit < transferAmount ) {
				console.error("Your transaction limit of card is exhausted!");
			} else if(balance < transferAmount ){
				console.error("Your card balance is exhausted!");
			} else {
				balance -= transferAmount;
				receiverCard.putCredits(amount);
			}
		}

	}
	return cardMethods;
}


// let card3 = userCard(3);
// console.log(card3.getCardOptions());
// card3.putCredits(150);
// card3.takeCredits(50);
// card3.setTransactionLimit(500);
// console.log(card3.getCardOptions());


// card3.takeCredits(50);
// card3.setTransactionLimit(500);

// let card3 = userCard(3);

// let card1 = userCard(1);
// card1.transferCredits(50, card3);
// console.log(card3.getCardOptions());
// card1.transferCredits(30, card3);
// console.log(card3.getCardOptions());