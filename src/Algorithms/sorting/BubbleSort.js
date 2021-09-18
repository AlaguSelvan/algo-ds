function bubbleSort(arr) {
  let isSorted = false;
  let counter = 0;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < arr.length - 1 - counter; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
        isSorted = false;
      }
    }
    counter++;
  }
  return arr;
}

const arr = [5, 2, 3, 7, 9, 1, 2, 0];

const output = bubbleSort(arr);

console.log(output);
