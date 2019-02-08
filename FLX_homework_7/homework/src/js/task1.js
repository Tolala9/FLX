const login = prompt("Plese enter your Login");
const currentTime = new Date().getHours();

if (login === "" || login === null) {
	alert("Canceled");
} else if ( login.length < 4 ) {
	alert("I don't know any users having name length less than 4 symbols");
} else if (login === "User" || login === "Admin") {

	const password = prompt("Plese enter your Password");
	if (password === "" || password === null) {
		alert("Canceled");
	} else if (login === "User" && password === "UserPass") {
		if (currentTime < 20) {
			alert("Good day, dear User!");
		} else {
			alert("Good evening, dear User!");
		}
	} else if (login === "Admin" && password === "RootPass") {
		if (currentTime < 20) {
			alert("Good day, dear Admin!");
		} else {
			alert("Good evening, dear Admin!");
		}
	} else {
		alert("Wrong password");
	}

} else {
	alert("I don’t know you");
}