function getMin() {
	let max = Infinity;
	for (let i = 0; i < arguments.length; i++) {
		if (Number.isInteger(arguments[i]) && arguments[i] < max) {
			max = arguments[i];
		}
	}
	return max;
}
getMin(-10.5, -5, -3);