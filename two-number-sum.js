// approach 1
// time o(n^2) space o(1)

// function twoNumberSum(array, targetSum) {
// 	for(let i = 0; i<= array.length-1; i++) {
// 		let firstNum = array[i]
// 		for(let j = i + 1; j<= array.length-1; j++) {
// 			let secondNum = array[j]
// 			if(firstNum + secondNum == targetSum) {
// 				return [firstNum, secondNum]
// 			}
// 		}
// 	}
// 	return []
// }

// approach 2
// time (o(n)) space o(log(n))




let array = [-1, -2, 1, 5, -6, 9, 8, 11];
targetSum = 13;

const output  = twoNumberSum(array, targetSum)


console.log(output)
