// 输出数组为字符串 toString() 和 join()
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 10, 15];
console.log(numbers.toString());    // 1,2,3,4,5,6,7,8,9,10,11,12,13,10,15
console.log(numbers.join('-'));     // 1-2-3-4-5-6-7-8-9-10-11-12-13-10-15


// 使用 from() 方法（根据已有数组创建一个新的数组）
let numbers2 = Array.from(numbers);  // 复制 numbers 数组
console.log(numbers2);
let evens = Array.from(numbers, x => (x % 2) == 0);  // 传入一个用来过滤值得函数）
console.log(evens);


// 使用 Array.of() 方法（根据传入得参数创建一个新数组）
let numbers3 = [1];
let numbers4 = [1, 2, 3, 4, 5,];
let numbersCopy = Array.from(numbers4);

/**
下面 3 行代码等效于上面 3 行代码
使用 Array.of() 方法 复制已有的数组
展开运算符（...）会把 numbers4 数组里得值都展开成参数
*/
// let numbers3 = Array.of(1);
// let numbers4 = Array.of(1, 2, 3, 4, 5,);
// let numbersCopy = Array.of(...numbers4);

console.log(numbers3);  // [ 1 ]
console.log(numbers4);  // [ 1, 2, 3, 4, 5 ]
console.log(numbersCopy);  // [ 1, 2, 3, 4, 5 ]


// 填充数组 fill()
// 注意：会改变原始数组，所以应特别注意
let fillNumbers = Array.of(1, 2, 3, 4, 5, 6);

// 所有的都填充为 0
let myFill = fillNumbers.fill(0);
console.log(myFill);  // [ 0, 0, 0, 0, 0, 0 ]

// 指定开始填充得索引，从 1 开始得所有位置都填充为 2
myFill = fillNumbers.fill(2, 1);
console.log(myFill);  // [ 0, 2, 2, 2, 2, 2 ]

// 指定结束填充的索引，把 1 填充到数组索引 3 到 5 的位置（包括 3 不包括 5）
myFill = fillNumbers.fill(1, 3, 5);
console.log(myFill);  // [ 0, 2, 2, 1, 1, 2 ]

// 创建数组并初始化值得时候，fill() 方法非常好用
let ones = Array(6).fill(1);
console.log(ones);  // [ 1, 1, 1, 1, 1, 1 ]

// 使用 copyWithin() 方法（复制数组中一系列元素到同一数组指定的起始位置）
// 注意：会改变原始数组，所以应特别注意
let  copyArray = [1, 2, 3, 4, 5, 6];

// 把 4、5、6 三个值复制到数组前三个位置
let myCopyWithin = copyArray.copyWithin(0, 3);
console.log(myCopyWithin);  // [ 4, 5, 6, 4, 5, 6 ]

// 把 从位置 3 开始到位置 5（包括 3 不包括 5）的元素复制到位置 1
myCopyWithin = copyArray.copyWithin(1, 3, 5);
console.log(myCopyWithin);  // [ 4, 4, 5, 4, 5, 6 ]
