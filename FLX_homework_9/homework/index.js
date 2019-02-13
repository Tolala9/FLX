/* Task #1 */
function findTypes() {
	let res = [];
	for (let i = 0; i < arguments.length; i++) {
		res.push(typeof arguments[i]);
	}
	return res;
}

/* Task #2 */
function executeforEach(arr, func) {
	let res = [];
	for (var i = 0; i < arr.length; i++) {
		let elem = func(arr[i]);
		if (findTypes(elem) !== "undefined" )  {
			if (elem) {
				res.push(arr[i]);
			} 
		} 
	}
	return res;
}
executeforEach([1,2,3], function(el) { console.log(el) })


/* Task #3 */
function mapArray(x, y) {
	return executeforEach(x, y);
}

/* Task #4 */
function filterArray(x, y) {
	return executeforEach(x, y);
}	


