// Add any extra import statements you may need here


// Add any helper functions you may need here

function matchingPairs(s, t) {
  // Write your code here
  // O(n) time |  O(n) space
  let n = s.length;
  let pairCount = 0;
  let sMap = []; // O(n) Space
  let tMap = [];

  for (let i = 0; i < s.length; i++) { // O(n) Time 
    if (s[i] === t[i]) {
      pairCount++;
    } else {
      sMap.push(s[i]);
      tMap.push(t[i]);
    }
  }

  if (pairCount === n) {
    return n - 2;
  }

  let swapCount = 0;
  for (const char of sMap) {
    if (tMap.indexOf(char) > -1) {
      swapCount++;
      pairCount++;
      if (swapCount === 2) {
        break;
      }
    }
  }
  return pairCount;
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

var s_1 = "abcde";
var t_1 = "adcbe";
var expected_1 = 5;
var output_1 = matchingPairs(s_1, t_1);
check(expected_1, output_1);

var s_2 = "abcd";
var t_2 = "abcd";
var expected_2 = 2;
var output_2 = matchingPairs(s_2, t_2);
check(expected_2, output_2); 

// Add your own test cases here
