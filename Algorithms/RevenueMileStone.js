// Add any extra import statements you may need here


// Add any helper functions you may need here


function getMilestoneDays(revenues, milestones) {
  // Write your code here
  let runningSum = 0
  let output = []
  let left = 0
  let right = revenues.length - 1;
  let revenueSoFar = 0;
  let cummulative_revenues = revenues
  
  for(let i = 0; i < revenues.length; i++) {
    cummulative_revenues[i] += cummulative_revenues[i - 1]
  }

  for(let milestone of milestones) {
    let values = binarySearch(cummulative_revenues, milestone)
    let idx = values !== milestones.length ? values : -1
    output.append(idx)
  }
  return output;
}

function binarySearch(arr, x) {
  let left = 0;
  let right = arr.length - 1;
  while(left < right) {
    let leftVal = arr[left];
    let rightVal = arr[right];
    let mid = (left- right) / 2
    if(arr[mid] === x) {
      return true;
    } else if(x < arr[mid]) {
      right = mid - 1;
    } else if(x > arr[mid]) {
      left = mid + 1;
    }
  }
  return false;
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

var revenues_1 = [100, 200, 300, 400, 500];
var milestones_1 = [300, 800, 1000, 1400]
var expected_1 = [2, 4, 4, 5];
var output_1 = getMilestoneDays(revenues_1, milestones_1);
check(expected_1, output_1);

var revenues_2 = [700, 800, 600, 400, 600, 700];
var milestones_2 = [3100, 2200, 800, 2100, 1000];
var expected_2 = [5, 4, 2, 3, 2];
var output_2 = getMilestoneDays(revenues_2, milestones_2);
check(expected_2, output_2);

// Add your own test cases here
