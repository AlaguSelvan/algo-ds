// Add any extra import statements you may need here

// Add any helper functions you may need here

function matchingPairs(s, t) {
  // Write your code here
  // O(n) time |  O(n) space
  const n = s.length;
  let pairCount = 0;
  const sMap = []; // O(n) Space
  const tMap = [];

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

const s_1 = 'abcde';
const t_1 = 'adcbe';
const expected_1 = 5;
const output_1 = matchingPairs(s_1, t_1);
check(expected_1, output_1);

const s_2 = 'abcd';
const t_2 = 'abcd';
const expected_2 = 2;
const output_2 = matchingPairs(s_2, t_2);
check(expected_2, output_2);

// Add your own test cases here
