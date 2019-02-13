/* Task #1 */
function findTypes() {
	let res = [];
	for (let i = 0; i < arguments.length; i++) {
		 res.push(typeof arguments[i]);
	}
	return res;
}

/* Task #2 */
function executeforEach() {
	let arr = arguments[0];
	let func = arguments[1];
	for (var i = 0; i < arr.length; i++) {
		func(arr[i]);
	}
}

