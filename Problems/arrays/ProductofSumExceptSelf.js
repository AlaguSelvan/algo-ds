// Time: O(3N) which is O(N) Space O(NlogN);
const productExceptSelf = (nums) => {
	const output = new Array(nums.length).fill(1);
	let left = new Array(nums.length).fill(1);
	let right = new Array(nums.length).fill(1);
	left[0] = 1;
	left[nums.length - 1] = 1;
	console.log(left);
	for (let i = 1; i < nums.length; i++) {
		left[i] = nums[i - 1] * left[i - 1];
	}
	console.log(left);
	for (let i = nums.length - 2; i >= 0; i--) {
		right[i] = nums[i + 1] * right[i + 1];
	}
	for (let i = 0; i < nums.length; i++) {
		output[i] = left[i] * right[i];
	}
	return output;
};

// Time O(N) Complexity Space O(1) result is not included in space
const productExceptSelf = (nums) => {
	let output = [1];
	for (let i = 1; i < nums.length; i++) {
		output.push(nums[i - 1] * output[i - 1]);
	}
	let J = 1;
	for (let j = nums.length - 1; j >= 0; j--) {
		output[j] *= J;
		J *= nums[j];
	}
	return output;
};

const nums = [1, 2, 3, 4];

const output = productExceptSelf(nums);
console.log(output);
