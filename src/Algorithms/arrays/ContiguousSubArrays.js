// Add any extra import statements you may need here

// Add any helper functions you may need here

// [3, 4, 1, 6, 2]
function countSubarrays(arr) {
  // Write your code here
  const N = arr.length;
  const left = new Array(N).fill(1);
  const right = new Array(N).fill(1);
  let consec = 0;
  let max = {
    value: arr[0],
    idx: 0,
  };
  for (let i = 1; i < N; i++) {
    const curr = arr[i];
    const prev = arr[i - 1];
    if (curr > max.value) {
      const val = (i - max.idx - 1);
      console.log(left[i]);
      console.log(arr[i]);
      left[i] += left[max.idx] + (i - max.idx - 1);
      console.log(left[i]);
      max.value = curr;
      max.idx = i;
    } else if (curr > prev) {
      left[i] += ++consec;
    } else {
      consec = 0;
    }
  }

  max = {
    value: arr[N - 1],
    idx: N - 1,
  };

  for (let i = N - 2; i >= 0; i--) {
    const curr = arr[i];
    const next = arr[i + 1];
    if (curr > max.value) {
      const val = (max.idx - i - 1);
      console.log(i, val);
      right[i] += right[max.idx] + (max.idx - i - 1);
      max.value = curr;
      max.idx = i;
    } else if (curr > next) {
      right[i] += ++consec;
    } else {
      consec = 0;
    }
  }

  const result = [];

  for (let i = 0; i < N; i++) {
    result[i] = left[i] + right[i] - 1;
  }

  return result;
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

const test_1 = [3, 4, 1, 6, 2];
const expected_1 = [1, 3, 1, 5, 1];
const output_1 = countSubarrays(test_1);
check(expected_1, output_1);

// var test_2 = [2, 4, 7, 1, 5, 3];
// var expected_2 = [1, 2, 6, 1, 3, 1];
// var output_2 = countSubarrays(test_2);
// check(expected_2, output_2);

// Add your own test cases here
