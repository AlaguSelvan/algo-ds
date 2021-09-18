const arr = [[1, 3, 4, 9],
  [2, 5, 8, 10],
  [6, 7, 11, 12]];

// Time O(N) space O(N) if auxilary O(1)
function zigzagTraverse(array) {
  const height = array.length - 1;
  const width = array[0].length - 1;
  console.log(height, width);
  let row = 0;
  let col = 0;
  let isGoingDown = true;
  const result = [];
  while (!checkOutOfBounds(row, col, height, width)) {
    console.log(row, col);
    result.push(array[row][col]);
    if (isGoingDown) {
      if (col === 0 || row === height) {
        isGoingDown = false;
        if (row === height) {
          col += 1;
        } else {
          row += 1;
        }
      } else {
        row += 1;
        col -= 1;
      }
    } else {
      if (row === 0 || col === width) {
        isGoingDown = true;
        if (col === width) {
          row += 1;
        } else {
          col += 1;
        }
      } else {
        row -= 1;
        col += 1;
      }
    }
  }
  return result;
}

function checkOutOfBounds(row, col, height, width) {
  return row < 0 || row > height || col < 0 || col > width;
}

const output = zigzagTraverse(arr);

console.log(output);
