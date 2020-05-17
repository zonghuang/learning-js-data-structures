// 迭代数组元素
// 我们需要一个数组和一个函数：如果数组里的元素可以被 2 整除（偶数），函数就返回 true，否则返回 false。
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const isEven = x => x % 2 === 0;

/* 另一种实现方式
function isEven(x) {
  // return x % 2 === 0 ? true : false;
  return (x % 2 === 0);
}
*/

// 迭代器 every()
// 用 every() 方法迭代（every() 方法会迭代数组中的每一个元素，直到返回 false）
const myEvery = numbers.every(isEven);
console.log(myEvery);  // false

// 迭代器 some()
// 用 some() 方法迭代（some() 方法会迭代数组中的每一个元素，直到返回 true）
const mySome = numbers.some(isEven);
console.log(mySome);  // true

// 迭代器 forEach()
// 用 forEach() 方法迭代（forEach() 方法会迭代数组中的每一个元素，它和使用 for 循环的结构相同）
numbers.forEach(x => console.log(x % 2 === 0));
// false  true  false  true  false  true  false  true  false  true  false  true  false  true  false

// 迭代器 map()
// 用 map() 方法迭代（map() 方法会返回新数组）
const myMap = numbers.map(isEven);
console.log(myMap);  
// [ false, true,  false, true,  false, true, false, true,  false, true,  false, true, false, true,  false]

// 迭代器 filter()
// 用 filter() 方法迭代（filter() 方法返回的新数组由 isEven() 函数返回 true 的元素）
const myFilter = numbers.filter(isEven);
console.log(myFilter);  // [ 2,  4,  6, 8, 10, 12, 14 ]

// 迭代器 reduce()
// reduce() 方法迭代 （reduce() 方法会返回一个将被叠加到累加器的值，reduce() 方法停止执行后会返回这个累加器）
const myReduce = numbers.reduce((previousValue, currentValue) => previousValue + currentValue);
console.log(myReduce);  // 120

// 迭代器 entries()
// 使用 entries() 迭代（返回包含数组所有键值对的 @@iterator）
let myRntries = numbers.entries();
console.log(myRntries.next().value);  // [ 0, 1 ]
console.log(myRntries.next().value);  // [ 1, 2 ]
console.log(myRntries.next().value);  // [ 2, 3 ]
// ...
myRntries = numbers.entries();
for (const n of myRntries) {
  console.log(n);
}
// [ 0, 1 ]  [ 1, 2 ]  [ 2, 3 ]  [ 0, 1 ]  [ 1, 2 ]  [ 2, 3 ]  [ 3, 4 ]  [ 4, 5 ]  [ 5, 6 ]
// [ 6, 7 ]  [ 7, 8 ]  [ 8, 9 ]  [ 9, 10 ]  [ 10, 11 ]  [ 11, 12 ]  [ 12, 13 ]  [ 13, 14 ]  [ 14, 15 ]

// 迭代器 keys()
// keys() 方法迭代（返回包含数组所有索引的 @@iterator）
let myKeys = numbers.keys();
console.log(myKeys.next());  // { value: 0, done: false }
console.log(myKeys.next());  // { value: 1, done: false }
console.log(myKeys.next());  // { value: 2, done: false }
// ...
myKeys = numbers.keys();
for (const n of myKeys) {
  console.log(n);
}
// 0  1  2  3  4  5  6  7  8  9  10  11  12  13  14

// 迭代器 values()
// values() 方法迭代（返回包含数组所有值的 @@iterator）
let myValues = numbers.values();
console.log(myValues.next());  // { value: 1, done: false }
console.log(myValues.next());  // { value: 2, done: false }
console.log(myValues.next());  // { value: 3, done: false }
// ...
myValues = numbers.values();
for (const n of myValues) {
  console.log(n);
}
// 1  2  3  4  5  6  7  8  9  10  11  12  13  14  15

// @@iterator
// 使用 @@iterator （返回一个包含数组键值对的迭代器对象，可以通过同步调用得到数组元素的键值对）
let myIterator = numbers[Symbol.iterator]();
console.log(myIterator.next().value); // 1
console.log(myIterator.next());       // { value: 2, done: false }
console.log(myIterator.next().value); // 2
console.log(myIterator.next().value); // 3
console.log(myIterator.next().value); // 4
console.log(myIterator.next().value); // 5
// ...
myIterator = numbers[Symbol.iterator]();
for (const n of myIterator) {
  console.log(n);
}
// 1  2  3  4  5  6  7  8  9  10  11  12  13  14  15
