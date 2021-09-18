// Add any extra import statements you may need here

function minLengthSubstring(s, t) {
  // Write your code here
  const map = new Map();
  for (let i = 0; i < t.length; i++) {
    const char = t.charAt(i);
    const val = map.get(char) || 0;
    map.set(char, val + 1);
  }

  let i = 0;
  let j = 0;
  let left = 0;
  let right = s.length - 1;
  let count = map.size;
  let min = s.length;
  let found = false;

  while (j < s.length) {
    const endChar = s.charAt(j++);
    if (map.has(endChar)) {
      map.set(endChar, map.get(endChar) - 1);
      if (map.get(endChar) === 0) count -= 1;
    }
    if (count > 0) continue;
    while (count === 0) {
      const startChar = s.charAt(i++);
      if (map.has(startChar)) {
        map.set(startChar, map.get(startChar) + 1);
        if (map.get(startChar) > 0) count += 1;
      }
    }
    if ((j - i) < min) {
      left = i;
      right = j;
      min = j - i;
      found = true;
    }
  }

  const len = s.substring(left - 1, right).length;
  return !found ? -1 : len;
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

const s_1 = 'dcbefebce';
const t_1 = 'fd';
const expected_1 = 5;
const output_1 = minLengthSubstring(s_1, t_1);
check(expected_1, output_1);

const s_2 = 'bfbeadbcbcbfeaaeefcddcccbbbfaaafdbebedddf';
const t_2 = 'cbccfafebccdccebdd';
const expected_2 = -1;
const output_2 = minLengthSubstring(s_2, t_2);
check(expected_2, output_2);

// Add your own test cases here
