//This is a global variable
var counter = 0;
var counter2 = 0;

window.onload = function loadFunction() {
	//here I set the screen to the initial value when the website is fully loaded.
	document.getElementById("screen").innerHTML = "The up-counter value is " + counter;
	document.getElementById("screen2").innerHTML = "The down-counter value is " + counter2;
};

//called when the user clicks
window.increaseCounter = function increaseCounter() {
	//increase the global counter by one
	counter++;
	//update the screen with the new value
	document.getElementById("screen").innerHTML = "The up-counter value is " + counter;
};

//called when the user clicks
window.decreaseCounter = function decreaseCounter() {
	//decrease the global counter by one
	counter2--;
	//update the screen with the new value
	document.getElementById("screen2").innerHTML = "The down-counter value is " + counter2;
};
