// 保护数据结构内部元素

// 1. 下划线命名约定
class Stack1 {
  constructor() {
    this._count = 0;
    this._items = {};
  }
  // 栈的方法
}
// 这种方式只是一种约定，并不能保护数据，而且只能依赖于使用该类的开发者所具备的常识。


// 2. 用 ES6 的限定作用域 Symbol 实现 Stack 类
const _items = Symbol('stackItems');  // 声明 Symbol 类型的变量 _items
class Stack2 {
  constructor() {
    this[_items] = [];                // 在类的构造函数中初始化它的值
  }
  // 栈的方法

  // 向栈中插入元素
  // 在 JavaScript 中，对象是一系列键值对的集合。使用 count 变量作为 items 对象的键名，插入的元素则是它的值
  push(element) {
    this[_items][this.count] = element;
    this.count++;
  }

  // 移除栈顶的元素，同时返回被移除的元素
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this[_items][this.count];
    delete this[_items][this.count];
    return result;
  }

  // 返回栈顶的元素，但不对栈做任何修改
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this[_items][this.count - 1];
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
    this[_items] = {};
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
    let objString = `${this[_items][0]}`;
    for (let i = 1; i < this.count; i++) {
      objString = `${objString}, ${this[_items][i]}`;
    }
    return objString;
  }

}

const stack = new Stack2();
stack.push(5);
stack.push(8);
let objectSymbols = Object.getOwnPropertySymbols(stack);
console.log(objectSymbols.length);  // 1
console.log(objectSymbols);         // [ Symbol(stackItems) ]
console.log(objectSymbols[0]);      // Symbol(stackItems)
stack[objectSymbols[0]].push(2);
console.log(stack.toString());      // 2
// 这种方式创建了一个假的私有属性，因为 ES6 新增的 Object.getOwnPropertySymbols 方法能够取到类里面声明的所有 Symbol 属性。


// 3. 用 ES6 的 WeakMap 实现 Stack 类
const items = new WeakMap();      // 声明一个 WeakMap 类型的变量 items
class Stack3 {
  constructor() {
    items.set(this, []);          // 以 this（Stack3 类自己的引用）为键，把代表栈的数组存入 items
  }
  push(element) {
    const s = items.get(this);    // 从 WeakMap 中取出值，以 this 为键从 items 中取值
    s.push(element);
  }
  pop() {
    const s = items.get(this);
    const r = s.pop();
    return r;
  }
  // 栈的其他方法
}

// 这种方式，items 在 Stack 类里是真正的私有属性。但代码可读性不强，而且在扩展该类时无法继承私有属性。鱼与熊掌不可兼得！


// 4. 通过在属性前添加 # 作为前缀来声明私有属性
class Stack4 {
  #count = 0;
  #items = 0;
  // 栈的方法
}
