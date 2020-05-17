// 数组元素排序
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// 使用 reverse() 方法（反序输入数组）
let myReverse = numbers.reverse();
console.log(myReverse);  // [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// 数组元素排序 sort()
// sort() 方法在对数组做排序时，把元素默认成字符串进行相互比较

// 不传参数直接使用 sort() 方法
let mySort = numbers.sort();
console.log(mySort);  // [1, 10, 11, 12, 13, 14, 15, 2, 3, 4, 5, 6, 7, 8, 9]

// 传入自己写的比较函数
mySort = numbers.sort((a, b) => a - b);
console.log(mySort);  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
/*
b > a 时，这段代码会返回负数，反之则返回正数，相等就返回 0，这样 sort() 方法就能根据返回值的情况对数组进行排序
*/

// 另一种实现方式
function compare(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}
mySort = numbers.sort(compare);
console.log(mySort);  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// 自定义排序 —— 对任何对象类型的数组排序
const friends = [
  { name: 'John', age: 20 },
  { name: 'Charles', age: 22 },
  { name: 'Bruce', age: 18 },
];
function comparePerson(a, b) {
  if (a.age < b.age) {
    return -1;
  }
  if (a.age > b.age) {
    return 1;
  }
  return 0;
}
console.log(friends.sort(comparePerson));
/*
[ 
  { 'name': 'Bruce', 'age': 18 },
  { 'name': 'John', 'age': 20 },
  { 'name': 'Charles', 'age': 22 }
]
*/

// 字符串排序
let names = ['Ana', 'ana', 'john', 'John'];
console.log(names.sort());  // ['Ana', 'John', 'ana', 'john']

// 忽略大小写进行排序
function compareString(a, b) {
  if (a.toLowerCase() < b.toLowerCase()) {
    return -1;
  }
  if (a.toLowerCase() > b.toLowerCase()) {
    return 1;
  }
  return 0;
}
console.log(names.sort(compareString));  // ['Ana', 'ana', 'John', 'john']

// 按照大小写字母顺序排序，小写排在前面
let mySortString = names.sort((a, b) => a.localeCompare(b));
console.log(mySortString);  // ['ana', 'Ana', 'john', 'John']

// 假如对带有重音符号的字符做排序的话，也可以用 localeCompare 来实现
