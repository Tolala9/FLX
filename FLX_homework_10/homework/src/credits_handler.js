function userCard(index) {
	let key = index;
	let	balance = 100;
	let transactionLimit = 100;
	let historyLogs = [];  


	const cardMethods = {
		getCardOptions: function() {
			return { balance, transactionLimit, historyLogs, key };
		}
	}
	return cardMethods;
}