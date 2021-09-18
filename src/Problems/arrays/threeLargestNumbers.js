function threeLargestNumbers(array) {
  // sort the array
  const threeLargest = [null, null, null];

  for (const arr of array) {
    updateLargest(threeLargest, arr);
  }

  return threeLargest;
}

const updateLargest = (threeLargest, num) => {
  if (!threeLargest[2] || num > threeLargest[2]) {
    shiftAndUpdate(threeLargest, num, 2);
  } else if (!threeLargest[1] || num > threeLargest[1]) {
    shiftAndUpdate(threeLargest, num, 1);
  } else if (!threeLargest[0] || num > threeLargest[0]) {
    shiftAndUpdate(threeLargest, num, 0);
  }
};

const shiftAndUpdate = (threeLargest, num, idx) => {
  for (let i = 0; i < idx + 1; i++) {
    if (i === idx) {
      threeLargest[i] = num;
    } else {
      threeLargest[i] = threeLargest[i + 1];
    }
  }
};

const array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7];

const output = threeLargestNumbers(array);

console.log(output);
