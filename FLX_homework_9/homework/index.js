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
		if (findTypes(elem) !== "undefined" ) {
			if (elem) {
				res.push(arr[i]);
			} 
		} 
	}
	return res;
}

/* Task #3 */
function mapArray(x, y) {
	return executeforEach(x, y);
}

mapArray([2, 5, 8], function(el) { 
	return el + 3;
});

/* Task #4 */
function filterArray(x, y) {
	return executeforEach(x, y);
}	

filterArray([2, 5, 8], function(el) {
 return el > 3;
});


