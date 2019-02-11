function addOne(x){
	return x + 1;
}
function addTen(x){
	return x + 10;
}

function pipe() {
	if (Number.isInteger(arguments[0])) {
		var num = arguments[0];
		for (var i = 1; i < arguments.length; i++) {
			num = arguments[i](num);
		}
		return num;
	} else {
		return "Not a number"
	}
}

console.log(pipe(2, addOne, addTen));

