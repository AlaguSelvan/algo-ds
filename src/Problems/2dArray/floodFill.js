const floodFill = (image, sr, sc, newColor, firstColor = image[sr][sc]) => {
  if(sr < 0 || sc < 0 || sr >= image.length || sc >= image[0].length || image[sr][sc] !== firstColor || image[sr][sc] === newColor) return image;
  image[sr][sc] = newColor;
  floodFill(image, sr + 1, sc, newColor, firstColor);
  floodFill(image, sr - 1, sc, newColor, firstColor);
  floodFill(image, sr, sc + 1, newColor, firstColor);
  floodFill(image, sr, sc - 1, newColor, firstColor);
  return image
}


const op = floodFill([[0,0,0],[0,0,0]], sr = 0, sc = 0, newColor = 2)


console.log(op)
