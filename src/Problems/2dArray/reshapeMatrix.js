var matrixReshape = function(mat, r, c) {
  let m = mat.length, n = mat[0].length, o = m * n;
  if (r * c != o) return mat;
  let col = new Array(c).fill(1)
  let res = new Array(r).fill(col)
  for (let i = 0; i < o; i++) res[i / c][i % c] = mat[i / n][i % n];
  return res;
};


const output = matrixReshape([[1,2],[3,4]], 4, 1);

console.log(output)
