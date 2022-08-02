
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let a = [];

  if(matrix === undefined) {
    return [];
  }

  matrix.forEach((value, index) => {
    if((index+1) % 2 === 0) {
      a.push(...value.reverse())
    } else {
      a.push(...value);
    }
  });

  return a;
}

