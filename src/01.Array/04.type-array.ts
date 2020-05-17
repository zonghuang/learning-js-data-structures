interface Person {
  name: String;
  age: number;
}

const myfriends = [
  {name: 'John', age: 20},
  {name: 'Charles', age: 22},
  {name: 'Bruce', age: 18},
];

function mycomparePerson(a: Person, b: Person) {
  if (a.age < b.age) {
    return -1;
  }
  if (a.age > b.age) {
    return 1;
  }
  return 0;
}
console.log(myfriends.sort(mycomparePerson));

/**
let friends1: {name: string, age: number}[];
friends1 = [
  {name: 'John', age: 20},
  {name: 'Charles', age: 22},
  {name: 'Bruce', age: 18},
];
function comparePerson1(a, b) {
  if (a.age < b.age) {
    return -1;
  }
  if (a.age > b.age) {
    return 1;
  }
  return 0;
}
*/

// 在终端中输入 tsc 类型数组ts.ts
