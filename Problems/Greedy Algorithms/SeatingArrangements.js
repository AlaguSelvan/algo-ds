// Add any extra import statements you may need here


// Add any helper functions you may need here


function minOverallAwkwardness(arr) {
  // Write your code here
	let res = new Array(arr.length).fill(0);
	let left = true;
	let max = Number.MIN_SAFE_INTEGER;
	
	arr.sort((a, b) => a - b);
	
	for (let i = 0; i < arr.length; i++) {
		if (left) {
			res[i/2] = arr[i];
		} else {
			res[arr.length - 1 - i/2] = arr[i];
		}
		left = !left;
	}
	
	for (let i = 0; i < res.length - 1; i++) {
		max = Math.max(max, Math.abs(res[i] - res[i + 1]));
	}
	return max;
}











// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom.
function printInteger(n) {
  var out = '[' + n + ']';
  return out;
}

var test_case_number = 1;

function check(expected, output) {
  var result = (expected == output);
  var rightTick = "\u2713";
  var wrongTick = "\u2717";
  if (result) {
    var out = rightTick + ' Test #' + test_case_number;
    console.log(out);
  }
  else {
    var out = '';
    out += wrongTick + ' Test #' + test_case_number + ': Expected ';
    out += printInteger(expected);
    out += ' Your output: ';
    out += printInteger(output);
    console.log(out);
  }
  test_case_number++;
}

var arr_1 = [5, 10, 6, 8];
var expected_1 = 4;
var output_1 = minOverallAwkwardness(arr_1);
check(expected_1, output_1);

var arr_2 = [1, 2, 5, 3, 7];
var expected_2 = 4;
var output_2 = minOverallAwkwardness(arr_2);
check(expected_2, output_2);

// Add your own test cases here
