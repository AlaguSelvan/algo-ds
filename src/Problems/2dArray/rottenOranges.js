/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let fresh = new Map();
    let rotten = new Map();
    for(let i = 0; i < grid.length; i++) {
      for(let j = 0; j < grid[0].length; j++) {
        if(grid[i][j] === 1) fresh.set("" + i + j, true);
        if(grid[i][j] === 2) rotten.set("" + i + j, true);
      }
    }
    console.log(fresh);
  let minutes = 0;
  let directions = [[0, 1], [1, 0], [-1, 0], [0, -1]]
  while(fresh.size > 0) {
    let infected = new Map();
    rotten.forEach((value, key, map) => {
      let i = parseInt(key.charAt(0));
      let j = parseInt(key.charAt(1));
      for(let direction of directions) {
        let nextI = i + direction[0];
        let nextJ = j + direction[1];
        if(fresh.has("" + nextI + nextJ)) {
          fresh.delete("" + nextI + nextJ);
          infected.set("" + nextI + nextJ, true);
        }
      }
    })
    if(infected.size === 0) return -1;
    rotten = infected
    minutes++;
  }
  return minutes;
};


const output = orangesRotting([[2,1,1],[1,1,0],[0,1,1]]);
console.log(output)
