function reverseNumber(num) {
	if (Number.isInteger(num)) {
		let string = String(num);
		let reversed = "";
		for (let i = string.length - 1; i >= 0 ; i--) {
			reversed += string[i];
		}
		return Math.sign(num) * parseInt(reversed); 
	} else {
		return "Not a number"
	}
}
console.log(reverseNumber(-456));