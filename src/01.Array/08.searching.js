// 数组元素搜索
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 10, 15];

// 数组元素搜索 indexOf() 和 lastIndexOf()
/**
indexOf() 方法（返回与参数匹配的第一个元素的索引，没有匹配上返回 -1）
lastIndexOf() 方法（返回与参数匹配的最后一个元素的索引，没有匹配上返回 -1）
*/
console.log(numbers.indexOf(10));       // 9
console.log(numbers.indexOf(100));      // -1

console.log(numbers.lastIndexOf(10));   // 13
console.log(numbers.lastIndexOf(100));  // -1

// 数组元素搜索 find() 和 findIndex()
/**
find() 方法（接受一个回调函数，搜索一个满足回调函数条件的值，没有搜索到满足条件的情况下返回 undefined）
findIndex() 方法（接受一个回调函数，搜索一个满足回调函数条件的索引，没有搜索到满足条件的情况下返回 -1
*/
function multipleOf3(element, index, array) {
  return element % 3 == 0;
}
console.log(numbers.find(multipleOf3));       // 3
console.log(numbers.findIndex(multipleOf3));  // 2

// 数组元素搜索 includes()
/**
includes() 方法（如果数组里存在某个元素，includes() 方法会返回 true，否子返回 false）
*/
console.log(numbers.includes(15));  // true
console.log(numbers.includes(20));  // false

// 传入一个起始索引，搜索会从索引指定的位置开始
console.log(numbers.includes(4, 5));  // false（索引 5 之后的元素不包含 4）
