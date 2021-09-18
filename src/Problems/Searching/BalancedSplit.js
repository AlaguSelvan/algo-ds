// Add any extra import statements you may need here

// Add any helper functions you may need here

function balancedSplitExists(arr) {
  // Write your code here
  let total = 0;
  for (const a of arr) {
    total += a;
  }
  if (total % 2 !== 0) return false;
  const state = new Map();
  return canPartition(arr, 0, 0, total, state);
}

function canPartition(arr, index, sum, total, state) {
  const current = `${index}${sum}`;
  if (state.has(current)) {
    return state.get(current);
  }
  if (sum * 2 === total) {
    return true;
  }
  if (sum > (total / 2) || index >= arr.length) {
    return false;
  }
  const foundPartition = canPartition(arr, index + 1, sum, total, state) || canPartition(arr, index + 1, sum + arr[index], total, state);
  state.set(current, foundPartition);
  return foundPartition;
}

// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom.
function printString(str) {
  const out = `["${str}"]`;
  return out;
}

let test_case_number = 1;

function check(expected, output) {
  const result = (expected == output);
  const rightTick = '\u2713';
  const wrongTick = '\u2717';
  if (result) {
    var out = `${rightTick} Test #${test_case_number}`;
    console.log(out);
  } else {
    var out = '';
    out += `${wrongTick} Test #${test_case_number}: Expected `;
    out += printString(expected);
    out += ' Your output: ';
    out += printString(output);
    console.log(out);
  }
  test_case_number++;
}

const arr_1 = [2, 1, 2, 5];
const expected_1 = true;
const output_1 = balancedSplitExists(arr_1);
check(expected_1, output_1);

const arr_2 = [3, 6, 3, 4, 4];
const expected_2 = false;
const output_2 = balancedSplitExists(arr_2);
check(expected_2, output_2);

// Add your own test cases here
