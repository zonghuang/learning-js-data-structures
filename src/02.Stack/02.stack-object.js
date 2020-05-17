/**
 * 创建一个基于数组的栈
 */
export default class Stack {

  constructor() {
    this.count = 0;
    this.items = {};
  }

  // 向栈中插入元素
  // 在 JavaScript 中，对象是一系列键值对的集合。使用 count 变量作为 items 对象的键名，插入的元素则是它的值
  push(element) {
    this.items[this.count] = element;
    this.count++;
  }

  // 移除栈顶的元素，同时返回被移除的元素
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  // 返回栈顶的元素，但不对栈做任何修改
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }

  // 如果栈里没有元素就返回 true，否则返回 false
  isEmpty() {
    return this.count === 0;
  }

  // 返回栈里的元素个数
  size() {
    return this.count;
  }

  // 移除栈里的所有元素
  clear() {
    this.items = {};
    this.count = 0
    // while (!this.isEmpty()) {
    //   this.pop();
    // }
  }

  // 创建一个 toString 方法来打印出栈的内容
  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`;
    }
    return objString;
  }

}

/**
 * 使用 Stack 类
 */
// 初始化 Stack 类
const stack = new Stack();

// 验证栈是否为空
console.log(stack.isEmpty());   // true

// 往栈里添加元素
stack.push(2);
stack.push(5);
stack.push(8);

// 打印栈的内容
console.log(stack.toString());    // 2, 5, 8

// 查看栈顶的元素
console.log(stack.peek());        // 8

// 查看栈里的元素个数
console.log(stack.size());        // 3

// 验证栈是否为空
console.log(stack.isEmpty());     // false

// 移除栈里的元素
console.log(stack.pop());         // 8
console.log(stack.pop());         // 5

// 移除栈里的所有元素
stack.clear();

// 验证栈是否为空
console.log(stack.isEmpty());   // true
console.log(stack.peek());      // undefined
console.log(stack.size());      // 0


// 从下面行 {1} 和 行 {2} 得出：count 和 items 属性是公开的，我们可以像行 {3} 那样直接访问它们
// 根据这种行为，可以对这两个属性赋新的值
console.log(Object.getOwnPropertyNames(stack));   // [ 'count', 'items' ]
console.log(Object.keys(stack));                  // [ 'count', 'items' ]
console.log(stack.items);                         // {}