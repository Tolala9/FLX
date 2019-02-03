let result;
typeValues();

function typeValues() {
	const a = parseFloat(prompt("Type value of A"));
	const b = parseFloat(prompt("Type value of B"));
	const c = parseFloat(prompt("Type value of C"));
	if (a === 0 || isNaN(a) & isNaN(b) & isNaN(c)) {
		result = "Invalid input data";
		showResult(result);
	} else {
		solveEquation(a, b, c);
	}
}

function solveEquation(a, b, c){
	let discriminant = b * b - 4 * a * c;
	
	if (discriminant === 0) {
		result = `x = ${-b / (2 * a)}`;
		showResult(result);
	} else if (discriminant > 0) {
		let x1 = (-1 * b + Math.sqrt(discriminant)) /(2 * a);
		let x2 = (-1 * b - Math.sqrt(discriminant)) /(2 * a);
		result = `x1 = ${x1} and x2 = ${x2}`;
		showResult(result);
	} else {
		result = "no solution";
		showResult(result);
	}
}

function showResult(result){
	alert(result);
}
