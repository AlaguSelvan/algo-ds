function selectionSort(arr) {
  const swap = (arr, idx1, idx2) => ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
  for (let i = 0; i < arr.length - 1; i++) {
    let lowestIdx = i;
    for (let j = i + 1; j <= arr.length - 1; j++) {
      if (arr[j] < arr[lowestIdx]) {
        lowestIdx = j;
      }
    }
    if (lowestIdx !== i) {
      console.log(lowestIdx, i);
      swap(arr, i, lowestIdx);
    }
  }
  return arr;
}

const arr = [10, 5, 21, 12, 3, 4, 6, 7, 11, 15, 1, 2, 2, 3];
const output = selectionSort(arr);

console.log(output);
