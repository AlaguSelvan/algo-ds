var i = 0;

callOne();
callTwo();

function callOne() {
	var i = 1;
	console.log(i);
}

function callTwo() {
	var i = 2;
	console.log(i);
}

// arrow functions are added only to code
const callThree = () => {
	var i = 3;
	console.log(i);
};

console.log(i);
