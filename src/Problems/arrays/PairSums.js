// Add any extra import statements you may need here

// Add any helper functions you may need here

function numberOfWays(arr, k) {
  // Write your code here
  const map = new Map();
  let count = 0;
  arr.map((ar) => map.has(ar) ? map.set(ar, map.get(ar) + 1) : map.set(ar, 1));
  arr.map((current) => {
    const targetsum = k - current;
    if (map.has(targetsum)) {
      count += map.get(targetsum);
    }
    if (targetsum === current) {
      count--;
    }
  });
  return count / 2;
}

// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom.
function printInteger(n) {
  const out = `[${n}]`;
  return out;
}

let test_case_number = 1;

function check(expected, output) {
  const result = expected == output;
  const rightTick = '\u2713';
  const wrongTick = '\u2717';
  if (result) {
    var out = `${rightTick} Test #${test_case_number}`;
    console.log(out);
  } else {
    var out = '';
    out += `${wrongTick} Test #${test_case_number}: Expected `;
    out += printInteger(expected);
    out += ' Your output: ';
    out += printInteger(output);
    console.log(out);
  }
  test_case_number++;
}

const k_1 = 6;
const arr_1 = [1, 2, 3, 4, 3];
const expected_1 = 2;
const output_1 = numberOfWays(arr_1, k_1);
check(expected_1, output_1);

const k_2 = 6;
const arr_2 = [1, 5, 3, 3, 3];
const expected_2 = 4;
const output_2 = numberOfWays(arr_2, k_2);
check(expected_2, output_2);

// Add your own test cases here
