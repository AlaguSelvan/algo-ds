// Add any extra import statements you may need here

// Add any helper functions you may need here

function findPositions(arr, x) {
// Write your code here
	const len = arr.length;
	let head = 0;

	const poped = []; //Map will index and the poped out iteration;
	for(let i = 0; i < x; i++) { // i+1 is the iteration
		let j = 0;
		let maxPos = head;
		let maxVal = arr[head];

		let r = Math.min(x, len - poped.length);
		while(j < r) { // actual magic happens here
			const val = arr[head];
			if(val === -1) {
				head = (head+1) % len;
				continue; // This ele is popped
			}
			if(val > maxVal)	{
				maxPos = head;
				maxVal = val;
			}
			if(val > 0) {
				arr[head] = val - 1;
			}
			head = (head+1) % len;
			j++;

		}
		arr[maxPos] = -1;
		poped.push(maxPos + 1);
	}
	return poped;
}










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

const n_1 = 6;
const x_1 = 5;
const arr_1 = [1, 2, 2, 3, 4, 5];
const expected_1 = [5, 6, 4, 1, 2];
const output_1 = findPositions(arr_1, x_1);
check(expected_1, output_1);

const n_2 = 13;
const x_2 = 4;
const arr_2 = [2, 4, 2, 4, 3, 1, 2, 2, 3, 4, 3, 4, 4];
const expected_2 = [2, 5, 10, 13];
const output_2 = findPositions(arr_2, x_2);
check(expected_2, output_2);

// Add your own test cases here
