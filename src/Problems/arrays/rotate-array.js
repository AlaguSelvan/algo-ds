const rotate = (nums, k) => {
  k %= nums.length;
  reverse(nums, 0, nums.length - 1);
  console.log(nums);
  reverse(nums, 0, k - 1);
  console.log(nums);
  reverse(nums, k, nums.length - 1);
  console.log(nums);
};

var reverse = function (nums, start, end) {
  while (start < end) {
    const temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
};

const output = rotate([1, 2, 3, 4, 5, 6, 7], 3);

console.log(output);
