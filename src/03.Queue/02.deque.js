/**
 * 创建双端队列（double-ended queue）
 */
export default class Deque {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  // 在双端队列最前端添加新的元素
  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.count++;
      this.lowestCount = 0;
      this.items[0] = element;
    }
  }

  // 在双端队列后端添加新的元素
  addBack(element) {
    this.items[this.count] = element;
    this.count++;
  }

  // 从双端队列前端移除第一个元素，并返回被移除的元素
  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  // 从双端队列后端移除第一个元素，并返回被移除的元素
  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  // 返回双端队列前端的第一个元素，不对队列做任何修改
  peekFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  // 返回双端队列后端的第一个元素，不对队列做任何修改
  peekBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
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
 * 使用 Deque 类
 */
const deque = new Deque();
console.log(deque.isEmpty());   // true
deque.addBack('John');
deque.addBack('Jack');
deque.addFront('Camila');
console.log(deque.toString());  // Camila, John, Jack
console.log(deque.size());      // 3
console.log(deque.isEmpty());   // false
deque.removeFront();
console.log(deque.toString());  // John, Jack
console.log(deque.peekFront()); // John
deque.removeBack();
console.log(deque.peekBack());  // John
deque.clear();
