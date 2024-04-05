/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function (grid) {
  const startingPoint = getStartingPoint(grid);
  const possiblePaths = [{ path: [startingPoint], grid }];
  const endedPaths = [];
  const fullPathLength =
    grid.flat().reduce((acc, curr) => acc + (curr === 0), 0) + 2;
  while (possiblePaths.length > 0) {
    const currentPath = possiblePaths.pop();
    const { path, grid } = currentPath;
    const NextCells = NextValidCells(path[path.length - 1], grid);
    const nextPaths = nextValidPaths(path, NextCells, grid);
    nextPaths.forEach((pathElement) => {
      const { path, grid } = pathElement;
      const lastCell = path[path.length - 1];
      const [row, column] = lastCell;
      if (grid[row][column] === 2) {
        endedPaths.push(path);
      } else {
        possiblePaths.push(pathElement);
      }
    });
  }
  //   console.log(endedPaths);
  return endedPaths.filter((item) => item.length === fullPathLength).length;
};

function getStartingPoint(grid) {
  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[0].length; column++) {
      if (grid[row][column] == 1) return [row, column];
    }
  }
}
// could be shortened to five conditions with a for loop
function NextValidCells(cell, grid) {
  const validCells = [];
  const [row, column] = cell;
  if (grid[row + 1]?.[column] === 0) validCells.push([row + 1, column]);
  if (grid[row - 1]?.[column] === 0) validCells.push([row - 1, column]);
  if (grid[row][column + 1] === 0) validCells.push([row, column + 1]);
  if (grid[row][column - 1] === 0) validCells.push([row, column - 1]);
  if (grid[row + 1]?.[column] === 2) validCells.push([row + 1, column]);
  if (grid[row - 1]?.[column] === 2) validCells.push([row - 1, column]);
  if (grid[row][column + 1] === 2) validCells.push([row, column + 1]);
  if (grid[row][column - 1] === 2) validCells.push([row, column - 1]);
  return validCells;
}
function nextValidPaths(path, validCells, grid) {
  const paths = [];
  for (cell of validCells) {
    const newGrid = JSON.parse(JSON.stringify(grid));
    const [row, column] = cell;
    if (newGrid[row][column] === 0) newGrid[row][column] = 1;
    paths.push({ path: path.concat([cell]), grid: newGrid });
  }
  return paths;
}