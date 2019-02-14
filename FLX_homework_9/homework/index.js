/* Task #1 */
function findTypes() {
	let res = [];
	for (let i = 0; i < arguments.length; i++) {
		res.push(typeof arguments[i]);
	}
	return res;
}
findTypes();

/* Task #2 */
function executeforEach(arr, func) {
	for (let i = 0; i < arr.length; i++) {
		func(arr[i]);
	}
}


/* Task #3 */
function mapArray(arr, func) {
	let newArr = [];
	executeforEach(arr, function(elem) {
		newArr.push(func(elem));
	})
	return newArr;
}

console.log(mapArray([2, 5, 8], function(el) { 
	return el + 2;
}));

/*Task #4 */
function filterArray(arr, func) {
	let res = [];
	executeforEach(arr, function(elem) {
		if (func(elem)) {
			res.push(elem);
		}
	});
	return res;
}	

console.log(filterArray([2, 5, 8], function(el) {
	return el > 3;
}));


/* Task #5 */
let data = [
{
	"_id": "5b5e3168c6bf40f2c1235cd6",
	"index": 0,
	"age": 39,
	"eyeColor": "green",
	"name": "Stein",
	"favoriteFruit": "apple"
},
{
	"_id": "5b5e3168e328c0d72e4f27d8",
	"index": 1,
	"age": 38,
	"eyeColor": "blue",
	"name": "Cortez",
	"favoriteFruit": "strawberry"
},
{
	"_id": "5b5e3168cc79132b631c666a",
	"index": 2,
	"age": 2,
	"eyeColor": "blue",
	"name": "Suzette",
	"favoriteFruit": "apple"
},
{
	"_id": "5b5e31682093adcc6cd0dde5",
	"index": 3,
	"age": 19,
	"eyeColor": "green",
	"name": "George",
	"favoriteFruit": "banana"
}
];



function getAmountOfAdultPeople(data) {
	let res = 0;
	filterArray(data, function(el) {
		if (el.age > 18) {
			res++
		}
	});
	return res;
}

console.log(getAmountOfAdultPeople(data));

/* Task #6 */
function getGreenAdultBananaLovers(data) {
	let filteredData = filterArray(data, function(el) {
		return el.age > 18 
		&& el.favoriteFruit === "banana" 
		&& el.eyeColor === "green";
	})
	let mappedData = mapArray(filteredData, function(el) {
		return el.name;
	})
	return mappedData;
}

console.log(getGreenAdultBananaLovers(data));

/* Task #7 */
function keys(obj) {
	let res = [];
	for ( let key in obj) {
		if (obj.hasOwnProperty(key)) {
			res.push(key);
		}
	}

	return res;
}

console.log(keys({keyOne: 1, keyTwo: 2, keyThree: 3}));

/* Task #8 */
function values(obj) {
	let res = [];
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			res.push(obj[key]);
		}
	}
	return res;
}

console.log(values({keyOne: 1, keyTwo: 2, keyThree: 3}));

/* Task #9 */
function showFormattedDate(date) {
	let months = ['Jan','Feb','Mar','Apr',
								'May','Jun','Jul','Aug',
								'Sep','Oct','Nov','Dec']
	console.log(`Date: ${date.getDate()} of ${months[date.getMonth()]}, ${date.getFullYear()} `);
}

showFormattedDate(new Date('2019-01-27T01:10:00'));

/* Task #10 */
function isEvenYear(date) {
	let year = date.getFullYear();
	console.log(year % 2 === 0);
}

isEvenYear(new Date('2019-01-27T01:10:00'));

function isEvenMonth(date) {
	let month = date.getMonth() + 1;
	console.log(month % 2 === 0);
}

isEvenMonth(new Date('2019-02-27T01:10:00'))