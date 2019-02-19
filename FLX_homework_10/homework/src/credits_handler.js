class UserAccount {
	constructor(name) {
		this.name = name;
		this.cards = [];
		this.maxCardsAmount = 3;
	}
	addCard() {
		if (this.cards.length < this.maxCardsAmount) {
			this.cards.push(userCard(this.cards.length + 1));
		} else {
			console.error('You can`t create more then 3 cards.')
		}
	}
	getCardByKey(index) {
		if (this.cards[index - 1] !== undefined) {
			return this.cards[index -1];
		} else {
			console.error('This card not exist! Please add card.')
		}
	}
}

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
			historyLogWrite('Received credits', amount);
		},
		takeCredits: function(amount) {
			if (transactionLimit < amount ) {
				console.error('Your transaction limit of card is exhausted!');
			} else if(balance < amount ){
				console.error('Your card balance is exhausted!');
			} else {
				balance -= amount;
				historyLogWrite('Withdrawal of credits', amount);
			}
		},
		setTransactionLimit: function(amount) {
			transactionLimit = amount;
			historyLogWrite('Transaction limit change', amount);
		},
		transferCredits: function(amount, receiverCard) {
			let transferAmount = amount * taxes + amount;
			if (transactionLimit < transferAmount ) {
				console.error('Your transaction limit of card is exhausted!');
			} else if(balance < transferAmount ){
				console.error('Your card balance is exhausted!');
			} else {
				this.takeCredits(transferAmount);
				receiverCard.putCredits(amount);
			}
		}

	}
	return cardMethods;
}