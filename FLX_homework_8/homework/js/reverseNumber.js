
function reverseNumber(num) {
	if (Number.isInteger(num)) {
		let reversed = num.toString().split('').reverse().join(''); 
		return Math.sign(num) * parseInt(reversed); 
	} else {
		return "Not a number"
	}
}
console.log(reverseNumber(-456));