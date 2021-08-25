// Time O(NlogN) space O(N log)N))
function mergeSort(arr) {
	if(arr.length === 1) return arr;
	let mid = Math.floor(arr.length / 2);
	let left = mergeSort(arr.slice(0, mid));
	let right = mergeSort(arr.slice(mid));
	return merge(left, right);
}

function merge(arr1, arr2) {
	let i = 0
	let j = 0;
	let results = [];
	while(i < arr1.length && j < arr2.length) {
		if(arr1[i] < arr2[j]) {
			results.push(arr1[i]);
			i++;
		} else if (arr2[j] < arr1[i]) {
			results.push(arr2[j]);
			j++;
		}
	}
	while(i < arr1.length) {
		results.push(arr1[i]);
		i++;
	}
	while(j < arr2.length) {
		results.push(arr2[j]);
		j++;
	}
	return results;
}

const arr = [5, 10, 34, 88, 32, 21, 15, 18, 56];

const output = mergeSort(arr);

console.log(output)