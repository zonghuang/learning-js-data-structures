// 使用 new 关键字创建和初始化数组
/*
let week = new Array();
week = new Array(7);
week = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
*/

// 使用 [] 的形式创建和初始化数组
let week = [];

// or
week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// 输出数组存了多少个元素（它的大小）
console.log(week.length);  // 7

// 访问元素和迭代数组
for (let i = 0; i < week.length; i++) {
  console.log(week[i]);
}
// 输出每个元素后都是换行的，这里用两个空格代表，你懂的
// Sunday  Monday  Tuesday  Wednesday  Thursday  Friday  Saturday


// 斐波那契数列
// 斐波那契数列中的前两项是 1，从第三项开始，每一项都等于前两项之和

// 求斐波那契数列的前 20 个数
let a = 20;

const fibonacci = [];
fibonacci[1]    = 1;
fibonacci[2]    = 1;

for(let i = 3; i < a; i++) {
  fibonacci[i] = fibonacci[i -1] + fibonacci[i -2];
}

for(let i = 1; i < fibonacci.length; i++) {
  console.log(fibonacci[i]);
}
// 输出每个元素后都是换行的，这里用两个空格代表，你懂的
// 1  1  2  3  5  8  13  21  34  55  89  144  233  377  610  987  1597  2584  4181
