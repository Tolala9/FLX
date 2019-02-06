checkLogin();

function checkLogin() {
	let login = prompt("Plese enter your Login");
	if (login === "" || login === null) {
		alert("Canceled");
	}else if ( login.length < 4 ) {
		alert("I don't know any users having name length less than 4 symbols");
	} else if (login === "User" || login === "Admin") {
		checkPassword(login);
	} else {
		alert("I don’t know you");
	}
}

function checkPassword(login) {
	let password = prompt("Plese enter your Password");
	if (password === "" || password === null) {
		alert("Canceled");
	} else if (login === "User" && password === "UserPass") {
		greeting(login);
	} else if (login === "Admin" && password === "RootPass") {
		greeting(login);
	} else {
		alert("Wrong password");
	}
}

function greeting(login) {
	let currentTime = new Date().getHours();
	if (currentTime < 20) {
		if (login === "User") {
			alert("Good day, dear User!");
		} else if (login === "Admin") {
			alert("Good day, dear Admin!");
		}
	} else if (currentTime >= 20) {
		if (login === "User") {
			alert("Good evening, dear User!");
		} else if (login === "Admin") {
			alert("Good evening, dear Admin!");
		}
	}
}


