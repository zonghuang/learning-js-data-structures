// 二维和多维数组

/**
二维数组
迭代所有的行和列，使用一个嵌套的 for 循环来处理，其中变量 i 为行，变量 j 为列。
在这种情况下，每个 myMatrix[i] 同样代表一个数组，因此需要在嵌套的 for 循环中迭代 myMatrix[i] 的每个位置。
*/

let matrix = [];
matrix[0] = [72, 75, 79, 79, 81, 81];
matrix[1] = [81, 79, 75, 75, 73, 73];
// 迭代二维数组的元素
function printMatrix(myMatrix) {
  for (let i = 0; i < myMatrix.length; i++) {
    for (let j = 0; j < myMatrix[i].length; j++) {
      console.log(myMatrix[i][j]);
    }
  }
}
printMatrix(matrix);
// 输出每个元素后都是换行的，这里用两个空格代表，你懂的（下面的也是这样）  
// 72  75  79  79  81  81  
// 81  79  75  75  73  73


// 多维数组（例如：创建一个 3*3*3 的矩阵，每一个格子里包含矩阵的 i(行)、j(列)、z(深度) 之和）
const matrix3 = [];
for (let i = 0; i < 3; i++) {
  matrix3[i] = [];  // 初始化每个数组
  for (let j = 0; j < 3; j++) {
    matrix3[i][j] = [];
    for (let z = 0; z < 3; z++) {
      matrix3[i][j][z] = i + j + z;
    }
  }
}
// 迭代多维数组
for (let i = 0; i < matrix3.length; i++) {
  for (let j = 0; j < matrix3[i].length; j++) {
    for (let z = 0; z < matrix3[i][j].length; z++) {
      console.log(matrix3[i][j][z]);
    }
  }
}
// 0  1  2  1  2  3  2  3  4  
// 1  2  3  2  3  4  3  4  5  
// 2  3  4  3  4  5  4  5  6
