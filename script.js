function toCase(text) {
  // write your code here
	let x = text + "-"; 
		
	x += text.toUpperCase();

	return x;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
