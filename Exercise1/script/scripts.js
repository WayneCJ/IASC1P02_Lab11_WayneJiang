var colorArr = ["red", "green", "blue", "yellow"];  //an array that contains 4 colors
var newCArr = new Array();                          //an empty array that will contain the random generated color

function start(){
	var randomColor= Math.floor(Math.random() *4);
	// pick a random number from 0 to 3
	document.getElementById("colorDisplay").innerHTML="Simon Says: " + colorArr[randomColor];
	//write down  a random color in the array
	newCArr.push(colorArr[randomColor]);
	// push the chosen random color to the empty array
	setTimeout("disappear()", 300);
	//setTimeout will call a function after a period of time
}

function disappear(){
	document.getElementById("colorDisplay").innerHTML="Simon Says: ";	
	// make color disappear
}

function green(){
	var green = ["green"];
	if(green == newCArr[0]){
		newCArr.pop()
		start();
	}else{
		document.getElementById("colorDisplay").innerHTML="Simon Says: Game Over";	
	}
}

function blue(){
	var blue = ["blue"];
	if(blue == newCArr[0]){
		newCArr.pop()
		start();
	}else{
		document.getElementById("colorDisplay").innerHTML="Simon Says: Game Over";	
	}
}

function yellow(){
	var yellow = ["yellow"];
	if(yellow == newCArr[0]){
		newCArr.pop()
		start();
	}else{
		document.getElementById("colorDisplay").innerHTML="Simon Says: Game Over";	
	}
}
function red(){
	var red = ["red"];
	if(red == newCArr[0]){
		newCArr.pop()
		start();
	}else{
		document.getElementById("colorDisplay").innerHTML="Simon Says: Game Over";	
	}
}