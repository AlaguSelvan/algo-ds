// Add any extra import statements you may need here


// Add any helper functions you may need here

// int countDistinctTriangles(ArrayList<Sides> arr) {
//     // Write your code here
//     int n = arr.size();
//     int count=0;
//     Set<String> set = new HashSet<>();
//     for(int i=0; i<arr.size(); i++) {
//       Sides t = arr.get(i);
//       int[] sides = new int[] {t.a, t.b, t.c};
//       Arrays.sort(sides);
//       String key = Arrays.toString(sides);
//       set.add(key);
//     }
//     return set.size(); 
//   }

// const updateLargest = (threeLargest, num) => {
// 	if (!threeLargest[2] || num > threeLargest[2]) {
// 		shiftAndUpdate(threeLargest, num, 2);
// 		return;
// 	} else if (!threeLargest[1] || num > threeLargest[1]) {
// 		shiftAndUpdate(threeLargest, num, 1);
// 		return;
// 	} else if (!threeLargest[0] || num > threeLargest[0]) {
// 		shiftAndUpdate(threeLargest, num, 0);
// 		return;
// 	}
// };

const updateLargest = (threeLargest, num) => {
	if (!threeLargest[2] || num > threeLargest[2]) {
		shiftAndUpdate(threeLargest, num, 2);
		return;
	} else if (!threeLargest[1] || num > threeLargest[1]) {
		shiftAndUpdate(threeLargest, num, 1);
		return;
	} else if (!threeLargest[0] || num > threeLargest[0]) {
		shiftAndUpdate(threeLargest, num, 0);
		return;
	}
};

const shiftAndUpdate = (threeLargest, num, idx) => {
	for (let i = 0; i < idx + 1; i++) {
		if (i === idx) {
			threeLargest[i] = num;
		} else {
			threeLargest[i] = threeLargest[i + 1];
		}
	}
};




function countDistinctTriangles(arr) {
  // Write your code here
	let n = arr.length;
  let count = 0;
	let res = new Set();
	for( let i = 0; i < arr.length; i++) {
		const t = arr[i];
		const sides = [t[0], t[1], t[2]]
		sides.sort((a, b) => a - b);
		let key = sides.toString();
		res.add(key)
	}
	return res.size
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

var arr_1 = [[7, 6, 5], [5, 7, 6], [8, 2, 9], [2, 3, 4], [2, 4, 3]];
var expected_1 = 3;
var output_1 = countDistinctTriangles(arr_1);
check(expected_1, output_1);

var arr_2 = [[3, 4, 5], [8, 8, 9], [7, 7, 7]];
var expected_2 = 3;
var output_2 = countDistinctTriangles(arr_2);
check(expected_2, output_2);

// Add your own test cases here
