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
		}

	}
	return cardMethods;
}


let card3 = userCard(3);
card3.getCardOptions();
card3. putCredits(150);