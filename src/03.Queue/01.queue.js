/**
 * 创建队列
 */
export default class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  // 向队列尾部添加一个（或多个）元素
  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }

  // 移除队列的第一个元素，并返回被移除的元素
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  // 返回队列中的第一个元素，不对队列做任何修改
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  // 如果队列中没有元素就返回 true，否则返回 false
  isEmpty() {
    return this.count - this.lowestCount === 0;
    // return this.size();
  }

  // 返回队列的元素个数
  size() {
    return this.count - this.lowestCount;
  }

  // 清空队列
  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  // toString 方法
  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`;
    }
    return objString;
  }

}


/**
 * 使用 Queue 类
 */
const queue = new Queue();
console.log(queue.isEmpty());   // true
queue.enqueue('John');
queue.enqueue('Jack');
console.log(queue.toString());  // John, Jack
console.log(queue.size());      // 2
console.log(queue.isEmpty());   // false
queue.dequeue();
console.log(queue.peek());      // Jack
