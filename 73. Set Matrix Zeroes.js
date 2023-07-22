/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

const setZeroes = function (matrix) {
  function setRowToZeros(index) {
    matrix[index] = Array(matrix[index].length).fill(0);
  }
  function setColumnToZeros(index) {
    for (let i = 0; i < matrix.length; i += 1) matrix[i][index] = 0;
  }
  let column;
  let row;
  for (let i = 0; i < matrix.length; i += 1)
    if (matrix[i][0] === 0) column = true;

  for (let j = 0; j < matrix[0].length; j += 1)
    if (matrix[0][j] === 0) row = true;

  for (let i = 1; i < matrix.length; i += 1) {
    for (let j = 1; j < matrix[0].length; j += 1) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for (let i = 1; i < matrix.length; i += 1)
    if (matrix[i][0] === 0) setRowToZeros(i);
  for (let j = 1; j < matrix[0].length; j += 1)
    if (matrix[0][j] === 0) setColumnToZeros(j);

  if (row) setRowToZeros(0);
  if (column) setColumnToZeros(0);
};
