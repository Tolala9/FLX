function userCard(index) {
	let key = index;
	let	balance = 100;
	let transactionLimit = 100;
	let historyLogs = [];  


	const cardMethods = {
		getCardOptions: function() {
			return { balance, transactionLimit, historyLogs, key };
		},

		putCredits: function(amount) {
			balance += amount;
		},

		takeCredits: function(amount) {
			if (transactionLimit <= amount ) {
				console.error("Your transaction limit of card is exhausted!");
			} else if(balance <= amount ){
				console.error("Your card balance is exhausted!");
			} else {
				balance -= amount;
			}
		},

		setTransactionLimit: function(amount) {
			transactionLimit = amount;
		}

	}
	return cardMethods;
}


let card3 = userCard(3);
card3.getCardOptions();
card3.putCredits(150);
card3.takeCredits(50);
card3.setTransactionLimit(500);