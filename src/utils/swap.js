export function swap(array, a, b) {
  // 经典方式
  // const temp = array[a];
  // array[a] = array[b];
  // array[b] = temp;

  // ES6 解构赋值 - 交换变量的值
  [array[a], array[b]] = [array[b], array[a]];
}
