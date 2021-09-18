// Add any extra import statements you may need here

// Add any helper functions you may need here

function findMinArray(arr, k) {
  // Write your code here
  for (let i = k; i > 0; i--) {
    const element = arr[i];
    const prevElement = arr[i - 1];
    if (prevElement > element) {
      arr[i - 1] = element;
      arr[i] = prevElement;
    }
  }
  return arr;
}

// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom.
function printintegerArray(array) {
  const size = array.length;
  let res = '';
  res += '[';
  let i = 0;
  for (i = 0; i < size; i++) {
    if (i !== 0) {
      res += ', ';
    }
    res += array[i];
  }
  res += ']';
  return res;
}

let test_case_number = 1;

function check(expected, output) {
  const expected_size = expected.length;
  const output_size = output.length;
  let result = true;
  if (expected_size != output_size) {
    result = false;
  }
  for (let i = 0; i < Math.min(expected_size, output_size); i++) {
    result &= (output[i] == expected[i]);
  }
  const rightTick = '\u2713';
  const wrongTick = '\u2717';
  if (result) {
    var out = `${rightTick} Test #${test_case_number}`;
    console.log(out);
  } else {
    var out = '';
    out += `${wrongTick} Test #${test_case_number}: Expected `;
    out += printintegerArray(expected);
    out += ' Your output: ';
    out += printintegerArray(output);
    console.log(out);
  }
  test_case_number++;
}

const n_1 = 3; const
  k_1 = 2;
const arr_1 = [5, 3, 1];
const expected_1 = [1, 5, 3];
const output_1 = findMinArray(arr_1, k_1);
check(expected_1, output_1);

const n_2 = 5; const
  k_2 = 3;
const arr_2 = [8, 9, 11, 2, 1];
const expected_2 = [2, 8, 9, 11, 1];
const output_2 = findMinArray(arr_2, k_2);
check(expected_2, output_2);

// Add your own test cases here
