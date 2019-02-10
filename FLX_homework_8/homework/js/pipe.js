function pipe(num,...args) {
	if (Number.isInteger(num)) {
		for (var i = 0; i < args.length; i++) {
			let res = args[i](num);
			num = res;
		}
		return num;
	} else {
		return "Not a number"
	}
}

console.log(pipe(2, addOne(), addTen()));

function addOne(x){
	return x + 1;
}

function addTen(x){
	return x + 10;
}