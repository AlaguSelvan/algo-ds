// Add any extra import statements you may need here


// Add any helper functions you may need here


function numberOfWays(arr, k) {
  // Write your code here
		let hashMap = {};
		let count = 0;
		arr.map(ar => hashMap[ar] ? hashMap[ar]++ : hashMap[ar] = 1);
		arr.map(current => {
			let targetsum = k - current;
			if(targetsum in hashMap) {
				count += hashMap[targetsum]
			 }
			 if(targetsum === current) {
				count--;
			 }
		})
		return count / 2;
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

var k_1 = 6;
var arr_1 = [1, 2, 3, 4, 3];
var expected_1 = 2;
var output_1 = numberOfWays(arr_1, k_1);
check(expected_1, output_1);

var k_2 = 6;
var arr_2 = [1, 5, 3, 3, 3];
var expected_2 = 4;
var output_2 = numberOfWays(arr_2, k_2);
check(expected_2, output_2);

// Add your own test cases here
