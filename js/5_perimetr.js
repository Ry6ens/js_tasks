// Найти периметр масива matrix по X
// P = a + b + c + d;
// [
//     "XOOXO",
//     "XOOXO",
//     "OOOXO",
//     "XXOXO",
//     "OXOOO"
// ];
// P = 24

const matrix = ["XOOXO", "XOOXO", "OOOXO", "XXOXO", "OXOOO"];

function perimiter(matrix) {
  let p = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === "X") {
        p += j === 0 || matrix[i][j - 1] === "O";
        p += i === 0 || matrix[i - 1][j] === "O";
        p += i === matrix.length - 1 || matrix[i + 1][j] === "O";
        p += j === matrix[i].length - 1 || matrix[i][j + 1] === "O";
      }
    }
  }
  return p;
}

console.log(perimiter(matrix));
