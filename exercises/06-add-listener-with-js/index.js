window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	//some code here
};

//the listener function here
var myWujuFunction = () => {
	alert("wuju");
};
// Add event listener to table
const el = document.querySelector("#theGreen");
el.addEventListener("click", myWujuFunction, false);
