//

function smallestDiference(arr1, arr2) {
	arr1.sort((a, b) => a - b);
	arr2.sort((a, b) => a - b);

	let min = +Infinity;

	let idxOne = 0;
	let endOne = arr1.length - 1;
	let idxTwo = 0;
	let endTwo = arr2.length - 1;

	while (idxOne < endOne && idxTwo < endTwo) {
		let left = arr1[arr1start];
		let right = arr2[arr2start];
		let diff = Math.abs(left - right);
		if (diff < min) {
			min = diff;
		}

		if (left < right) {
			arr1start++;
		} else {
			arr2start++;
		}
	}
	return min;
}

let arr1 = [-1, 3, 5, 10, 20, 28];
let arr2 = [15, 17, 26, 134, 135];

smallestDiference(arr1, arr2);
