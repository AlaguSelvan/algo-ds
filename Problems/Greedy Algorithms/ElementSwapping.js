// Add any extra import statements you may need here


// Add any helper functions you may need here


function findMinArray(arr, k) {
  // Write your code here
  for ( let i = k; i > 0; i--) {
		const element = arr[i];
		const prevElement = arr[i - 1];
		if(prevElement > element) {
			arr[i - 1] = element;
			arr[i] = prevElement;
		}
	}
	return arr;
}











// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom.
function printintegerArray(array) {
  var size = array.length;
  var res = '';
  res += '[';
  var i = 0;
  for (i = 0; i < size; i++) {
    if (i !== 0) {
      res += ', ';
    }
    res += array[i];
  }
  res += ']';
  return res;
}

var test_case_number = 1;

function check(expected, output) {
  var expected_size = expected.length;
  var output_size = output.length;
  var result = true;
  if (expected_size != output_size) {
    result = false;
  }
  for (var i = 0; i < Math.min(expected_size, output_size); i++) {
    result &= (output[i] == expected[i]);
  }
  var rightTick = "\u2713";
  var wrongTick = "\u2717";
  if (result) {
    var out = rightTick + ' Test #' + test_case_number;
    console.log(out);
  }
  else {
    var out = '';
    out += wrongTick + ' Test #' + test_case_number + ': Expected ';
    out += printintegerArray(expected);
    out += ' Your output: ';
    out += printintegerArray(output);
    console.log(out);
  }
  test_case_number++;
}


var n_1 = 3, k_1 = 2;
var arr_1 = [5, 3, 1];
var expected_1 = [1, 5, 3];
var output_1 = findMinArray(arr_1, k_1);
check(expected_1, output_1);

var n_2 = 5, k_2 = 3;
var arr_2 = [8, 9 ,11, 2, 1];
var expected_2 = [2, 8, 9, 11, 1];
var output_2 = findMinArray(arr_2, k_2);
check(expected_2, output_2);

// Add your own test cases here
