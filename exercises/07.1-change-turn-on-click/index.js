var currentUser = "Mario";

window.onload = function loadfn() {
	document.getElementById("screen").innerHTML = "It's " + currentUser + "'s turn";
};

window.turnChanger = function turnChanger() {
	let randomnumber = Math.floor(Math.random() * (3 - 1 + 1) + 1);
	if (randomnumber == 1) {
		currentUser = "Mario";
	} else if (randomnumber == 2) {
		currentUser = "Juan";
	} else {
		currentUser = "Josh";
	}

	document.getElementById("screen").innerHTML = "It's " + currentUser + "'s turn";
};
