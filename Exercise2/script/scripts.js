var nouns = ["dog", "cat", "boy", "girl", "fish"];            // the array that contains 5 nouns
var adjs = ["happy ", "sad ", "angry ", "shiny ", "good "];   // the array that contains 5 adjectives

function generate(){
	var randomNum = Math.floor(Math.random() *5);
	var randomNum2 = Math.floor(Math.random() *5);
	// random generate 2 random numbers from 0 to 4
	document.getElementById("sentence").innerHTML += "What a " + adjs[randomNum] + nouns[randomNum2] +"!<br/><br/>";
	//print out the two array items with the numbers of the random generated numbers 
}