var moveZeroes = function(nums) {
  let count=0;
  for(let i=0;i<nums.length;i++){
      if(count===nums.length){
          break
      }
      count++
      if(nums[i]===0){
        nums.splice(nums.length,0,nums.splice(i,1)[0])
          i--
      }
  }
  return nums
};


const output = moveZeroes([0, 1, 0, 3, 12]);

console.log(output)
