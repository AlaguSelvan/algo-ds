// Add any extra import statements you may need here

// Add any helper functions you may need here

function getBillionUsersDay(growthRates) {
  const BIL = 1000000000;
  let users = 0;
  const g = Math.max(...growthRates);
  let lo = 1;
  let hi = Number.MAX_SAFE_INTEGER;

  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2);
    users = Math.pow(g, mid);
    if (hi - lo === 1) return hi;
    if (users > BIL) {
      hi = mid;
    } else if (users < BIL) {
      lo = mid;
    } else {
      return mid;
    }
  }
  return mid;
}

// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom.
function printInteger(n) {
  const out = `[${n}]`;
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
    out += printInteger(expected);
    out += ' Your output: ';
    out += printInteger(output);
    console.log(out);
  }
  test_case_number++;
}

const test_1 = [1.1, 1.2, 1.3];
const expected_1 = 79;
const output_1 = getBillionUsersDay(test_1);
check(expected_1, output_1);

const test_2 = [1.01, 1.02];
const expected_2 = 1047;
const output_2 = getBillionUsersDay(test_2);
check(expected_2, output_2);

// Add your own test cases here
