// Add any extra import statements you may need here

// Add any helper functions you may need here


function areTheyEqual(array_a, array_b){
  // Write your code here
  let hash = {};
  array_a.map(arr => hash[arr] ? hash[arr]++ : hash[arr] = 1);
  array_b.map(arr => {
    let prev = hash[arr]
    if(prev <= 0) return false;
    hash[arr]--;
  })
  for(let key in hash) {
    if(hash[key] > 0) return false;
  }
  return true;
}

// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom.
function printString(str) {
  const out = `["${str}"]`;
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
    out += printString(expected);
    out += ' Your output: ';
    out += printString(output);
    console.log(out);
  }
  test_case_number++;
}

// const array_a_1 = [1, 2, 3, 4];
// const array_b_1 = [1, 4, 3, 2];
// const expected_1 = true;
// const output_1 = areTheyEqual(array_a_1, array_b_1);
// check(expected_1, output_1);

const array_a_2 = [1, 2, 3, 4];
const array_b_2 = [1, 4, 3, 3];
const expected_2 = false;
const output_2 = areTheyEqual(array_a_2, array_b_2);
check(expected_2, output_2);

// Add your own test cases here
