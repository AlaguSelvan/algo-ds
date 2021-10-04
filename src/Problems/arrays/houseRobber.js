/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let x = 0;
  let y = 0;
  for(let i = 1; i < nums.length; i++) {
    [x, y] = [y, Math.max(x + nums[i], y)];
  }
  return Math.max(x, y);
};

const output = rob([1,2,3,1])

console.log(output)
