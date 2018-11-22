var numArr= new Array();

function go(){
	var i= parseFloat(document.getElementById("numInput").value);
	// get the intger user entered
	for ( n = 0; n <= i; n++){
		numArr.push(n);// push the number to the empty array
		//console.log(numArr);
		document.getElementById("numLoop").innerHTML += numArr[n] + "<br/><br/>";
	}
}

