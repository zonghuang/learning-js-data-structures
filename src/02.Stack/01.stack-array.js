/**
 * 创建一个基于数组的栈
 */
class Stack {

  constructor() {
    this.items = [];  // 选择一种数据结构（数组）来保存栈里的元素
  }

  // 添加一个（或几个）新元素到栈顶
  push(element) {
    this.items.push(element);
  }

  // 移除栈顶的元素，同时返回被移除的元素
  pop() {
    return this.items.pop();
  }

  // 返回栈顶的元素，但不对栈做任何修改
  peek() {
    return this.items[this.items.length - 1];
  }

  // 如果栈里没有元素就返回 true，否则返回 false
  isEmpty() {
    return this.items.length === 0;
  }

  // 返回栈里的元素个数
  size() {
    return this.items.length;
  }

  // 移除栈里的所有元素
  clear() {
    this.items = [];
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

// 查看栈顶的元素
console.log(stack.peek());    // 8

// 查看栈里的元素个数
console.log(stack.size());    // 3

// 验证栈是否为空
console.log(stack.isEmpty());   // false

// 移除栈里的元素
console.log(stack.pop());       // 8
console.log(stack.pop());       // 5

// 移除栈里的所有元素
stack.clear();

// 验证栈是否为空
console.log(stack.isEmpty());   // true
console.log(stack.peek());      // undefined
console.log(stack.size());      // 0