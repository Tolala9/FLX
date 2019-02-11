function formatTime(x) {
	if (Number.isInteger(x) && x > 0) {
		let days = Math.floor(x / 1440);
		x -= days * 1440;
		let hours = Math.floor(x / 60)
		x -= hours * 60;
		let minutes = x;
		return `${days} day(s) ${hours} hour(s) ${minutes} minute(s).`;
	} else { 
		return "It's not a positive integer number";
	}
}
formatTime(3601);