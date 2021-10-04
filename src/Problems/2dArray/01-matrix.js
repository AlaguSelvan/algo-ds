let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
function updateMatrix(mat) {
  let vRows = new Array(mat.length).fill(false);
  let visited = new Array(mat[0].length).fill(vRows);
  for(let i = 0; i < mat.length; i++) {
    for(let j = 0; j < mat[0].length; j++) {
      if(mat[i][j] === 0) {
        dfs(mat, i, j, 0, visited);
      }
    }
  }
  return mat
}

function dfs(mat, i, j, level, visited) {
  if(i < 0 || i >= mat.length || j < 0 || j >= mat[0].length || (mat[i][j] === 0 && level !== 0)) {
    return;
  }
  if(visited[i][j] !== undefined) {

  }

  mat[i][j] = level;
  visited[i][j] = true;
  for(let k = 0; k < 4; k++) {
    // dfs(mat, i + directions[k][0], j + directions[k][1], level + 1, visited);
  }
}

const output = updateMatrix([[0, 0, 0], [0, 1, 0], [1, 1, 1]]);

console.log(output);



// class Solution {
//     int[][] directions = new int[][]{{0,-1},{0,1},{1,0},{-1,0}};
//     boolean[][] visited;
//     public int[][] updateMatrix(int[][] mat) {
//         int rows = mat.length, cols = mat[0].length;
//         visited = new boolean[rows][cols];
//         for(int i=0;i<rows;i++){
//             for(int j=0;j<cols;j++){
//                 if(mat[i][j]==0){
//                     dfs(mat,i,j,rows,cols,0);
//                 }
//             }
//         }
//         return mat;
//     }
//     //level denotes the distance between the cell with 0 we are currently processing and 1
//     private void dfs(int[][] mat, int i, int j, int rows, int cols, int level){
//         if(i < 0 || i >= rows || j < 0 || j >= cols || (mat[i][j]==0 && level != 0)){
//             return ;
//         }

//         if(visited[i][j] && mat[i][j] <= level){
//             return;
//         }
//         mat[i][j] = level;
//         visited[i][j] = true;
//         for(int k=0;k<4;k++){
//             dfs(mat,i+directions[k][0], j+directions[k][1], rows,cols,level+1);
//         }
//     }
// }
