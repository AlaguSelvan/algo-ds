var twoSum = function(nums, target) {
   let map = new Map();
   for(let i = 0; i <= nums.length - 1; i++) {
     let num = nums[i];
    if(map.has(target - num)) {
      return [map.get(target - num), i];
    } else {
      map.set(num, i);
    }
   }
};


const output = twoSum([3,2,4], 6);

console.log(output);
