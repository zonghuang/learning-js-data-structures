// 数组合并 concat()
/**
concat() 连接 2 个或 2 个已上的数组，并返回结果。
concat() 可以向一个数组传递数组、对象或是元素。数组会按照该方法传入的参数顺序连接指定的数组。
*/

const zero = 0;
const positiveNumbers = [1, 2, 3];
const negativeNumbers = [-3, -2, -1];
let numbers = negativeNumbers.concat(zero, positiveNumbers);    // [-3, -2, -1, 0, 1, 2, 3]
