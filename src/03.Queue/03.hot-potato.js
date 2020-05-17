import Queue from './01.queue.js';

/*
击鼓传花游戏：
• 孩子们围城一个圆圈，把花尽快地传递给傍边的人。
• 某一时刻传花停止，这个时候花在谁手里，谁就退出圆圈、结束游戏。
• 重复这个过程，直到只剩一个孩子（胜者）。
*/
function hotPotato(elementList, num) {
  const queue = new Queue();
  const elimitatedList = [];

  for (let i = 0; i < elementList.length; i++) {
    queue.enqueue(elementList[i]);
  }

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    elimitatedList.push(queue.dequeue());
  }

   return {
     eliminated: elimitatedList,
     winner: queue.dequeue()
   };
}

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
const result = hotPotato(names, 7);
result.eliminated.forEach(name => {
  console.log(`${name}在击鼓传花游戏中被淘汰`);
})

console.log(`胜利者：${result.winner}`);
/*
Camila在击鼓传花游戏中被淘汰
Jack在击鼓传花游戏中被淘汰
Carl在击鼓传花游戏中被淘汰
Ingrid在击鼓传花游戏中被淘汰
胜利者：John
*/