// 1.添加数组元素

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 * 在数组末尾插入元素
 */

// 把值赋给数组中最后一个空位上的元素
numbers[numbers.length] = 10;

// push() 方法（在数组的末尾添加元素）
numbers.push(11);
numbers.push(12, 13);
console.log(numbers);  // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ]


/**
 * 在数组开头插入元素
 */

// （原生）在数组开头插入元素
Array.prototype.insertFirstPosition = function (value) {
  for (let i = this.length; i >= 0; i--) {
    this[i] = this[i - 1];
  }
  this[0] = value;
}
numbers.insertFirstPosition(-1);  // [ -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ]

// unshift()（在数组的开头添加元素）
numbers.unshift(-2);
numbers.unshift(-4, -3);
console.log(numbers);  // [ -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ]


// 2.删除元素

/**
 * 在数组末尾删除元素
 */

 // pop()（从数组末尾删除元素）
 numbers.pop();
console.log(numbers);  // [ -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]

/**
 * 在数组开头删除元素
 */

 // （原生）从数组开头删除元素
 // 步骤一：将所有不是 undefined 的值从原来的数组复制到新的数组中，创建一个 reIndex 方法
Array.prototype.reIndex = function(myArray) {
  const newArray = [];
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] !== undefined) {
      newArray.push(myArray[i]);
    }
  }
  return newArray;
}

// 步骤二：手动移除第一个元素并重新排序
Array.prototype.removeFirst = function() {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i + 1];
  }
  return this.reIndex(this);
};

// 步骤三：调用函数删除
numbers.removeFirst();
console.log(numbers);  // [ -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, undefined ]

// 从中可以得出，只是用后一个值覆盖了前一个值，数组长度并未改变。

// shift() （删除数组的第一个元素）
numbers.shift();  // -3
console.log(numbers);  // [ -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, undefined ]


// 3.在数组任意位置添加或删除元素 splice()

/**
splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组，并以数组形式返回被修改的内容。此方法会改变原数组。
参数：
1. 第一个：表示想要删除或插入的元素的索引值
2. 第二个：表示想要删除元素的个数
3. 第三个往后：表示想要添加到数组里的值
*/

// 删除从数组索引 5 开始的 3 个元素
numbers.splice(5, 3);  // [ 3, 4, 5 ]

// 从索引 5 开始添加元素 2、3、4
numbers.splice(5, 0, 2, 3, 4);  // []
console.log(numbers);  // [-2, -1, 0, 1, 2, 2, 3, 4,  3, 4, 5, 6, 7, 8, 9, 10, 11, 12, undefined]
