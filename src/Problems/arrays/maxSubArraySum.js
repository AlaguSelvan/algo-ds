
// time O(nlogm) space O(1)
const maxSubArraySum = (arr, num) => {
  if(num > arr.length) return null
  let max = -Infinity
  for (let i = 0; i <= arr.length - num; i++) {
    temp = 0;
    for(let j = 0; j < num; j++) {
      temp += arr[i + j]
    }
    max = Math.max(max, temp);
  }
  return max;
}



const output = maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)

console.log(output)
