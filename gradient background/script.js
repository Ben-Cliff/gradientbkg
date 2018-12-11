var input1 =document.getElementById("color1");
var input2 = document.getElementById("color2");
var doc = document.querySelector("body");

function listenColor(){

	doc.style.background = "linear-gradient(to right, "+input1.value+", "+input2.value;

}
input1.addEventListener('input', listenColor);
input2.addEventListener('input', listenColor);