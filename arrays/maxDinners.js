// Not done


function getMaxAdditionalDinersCount(N, K, M, S) {
  // Write your code here
	if(K > N) return 0;
	let reservedSpace = ((2 * K) + 1) * M;
	console.log(reservedSpace)
	let newArr = S
	for(let i of S) {
		if(i + (K) > N) {
			const diffFromEnd = Math.abs(N - i);
			// newArr.splice(i, 1)
			reservedSpace -= diffFromEnd;
		} else if(i - (K) < 1) {
			const diffFromStart = Math.abs(i - 1);
			reservedSpace -= diffFromStart;
			// newArr.splice(i, 1)
		} else {
			
		}
		for(let j of S) {
			const nextSeat = i + (K + 1)
			if((nextSeat !== j)) {
				// newArr.push(i)
				console.log(i)
				console.log(nextSeat)
				newArr.push(S)
				console.log(newArr)
			} else {
				// newArr.splice(i, 1)
				reservedSpace -= K
			}
		}
	}
	console.log(newArr)
	console.log(reservedSpace)

	const availSpace = N - reservedSpace;
	let result = availSpace / (K + 1);
	return Math.round(result);

}

N = 10
K = 1
M = 2
S = [2, 6]



getMaxAdditionalDinersCount(N, K, M, S)