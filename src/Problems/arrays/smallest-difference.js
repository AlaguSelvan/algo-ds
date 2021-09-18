//

function smallestDiference(arr1, arr2) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  let min = +Infinity;

  const idxOne = 0;
  const endOne = arr1.length - 1;
  const idxTwo = 0;
  const endTwo = arr2.length - 1;

  while (idxOne < endOne && idxTwo < endTwo) {
    const left = arr1[arr1start];
    const right = arr2[arr2start];
    const diff = Math.abs(left - right);
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

const arr1 = [-1, 3, 5, 10, 20, 28];
const arr2 = [15, 17, 26, 134, 135];

smallestDiference(arr1, arr2);
