// Add any extra import statements you may need here


// Add any helper functions you may need here

// boolean balancedSplitExists(int[] arr) {
//     int len = arr.length;
//     if (len == 0) {
//       return false;
//     }
    
//     Arrays.sort(arr);
//     int totalSum = 0;
//     int remaining = arr[len - 1];
//     for (int i = 0; i < len - 1; i++) {
//       totalSum += arr[i];
//     }
    
//     for (int i = len - 2; i >= 0; i--) {     
//       if (totalSum == remaining && arr[i] < arr[i + 1]) return true;
//       if (totalSum < remaining) break;
      
//       totalSum -= arr[i];
//       remaining += arr[i];
//     }
    
//     return false;
//   }


function balancedSplitExists(arr) {
  // Write your code here
  let n = arr.length;
  if(n === 0) {
		return false;
	}
	arr.sort((a, b) => a - b)
	let totalSum = 0;
	let remaining = arr[n - 1]
	for( let i = 0; i < n - 1; i++) {
		totalSum += arr[i]
	}
	for(let i = n - 2; i >= 0; i--) {
		if(totalSum === remaining && arr[i] < arr[i + 1]) return true;
		if(totalSum < remaining) break;

		totalSum -= arr[i];
		remaining += arr[i]
	}
	return false
}

function canPartition(arr, index, sum, total, state) {
  let current = index + "" + sum;
  if(state.has(current)) {
    return state.get(current)
  }
  if(sum * 2  === total) {
    return true;
  }
  if( sum > (total / 2) || index >= arr.length) {
    return false
  }
  const foundPartition = canPartition(arr, index + 1, sum, total, state) || canPartition(arr, index + 1, sum + arr[index], total, state)
  state.set(current, foundPartition)
  return foundPartition;
}











// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom.
function printString(str) {
  var out = '["' + str + '"]';
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
    out += printString(expected);
    out += ' Your output: ';
    out += printString(output);
    console.log(out);
  }
  test_case_number++;
}

var arr_1 = [2, 1, 2, 5];
var expected_1 = true;
var output_1 = balancedSplitExists(arr_1); 
check(expected_1, output_1); 

var arr_2 = [3, 6, 3, 4, 4];
var expected_2 = false;
var output_2 = balancedSplitExists(arr_2); 
check(expected_2, output_2); 

// Add your own test cases here
