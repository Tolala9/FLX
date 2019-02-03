typeValues();
function typeValues() {
	const startPrice = parseFloat(prompt("Type the price"));
	const discount	 = parseFloat(prompt("Type the discount"));
	countFinishPrice(startPrice, discount);
}

function countFinishPrice(startPrice, discount){
	if ((startPrice >= 0 && startPrice <= 9999999) 
		&& (discount >= 0 && discount <= 99)) {
		let	savedMoney = (startPrice / 100) * 30;
		let	finishPrice = startPrice - savedMoney;
		result = `Price without discount: ${+startPrice.toFixed(2)}
Discount: ${+discount.toFixed(2)}%
Price with discount: ${+finishPrice.toFixed(2)}
Saved: ${+savedMoney.toFixed(2)}`;
		showResult(result);
	} else {
		result = "Invalid input data";
		showResult(result);
	}
}

function showResult(result) {
	alert(result);
}

