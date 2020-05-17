import Deque from './02.deque.js';

/*
回文检查器：
• 回文是正反都能读通的单词、词组、数或一系列字符的序列，例如：madam 或 racecar。
• 最简单的检查方式：将字符串反向排列并检查它和原字符串是否相同。
*/
function palindromeChecker(aString) {
  if (aString === undefined || aString === null || (aString !== null && aString.length === 0)) {
    return false;
  }

  const deque = new Deque();
  const lowerString = aString.toLocaleLowerCase().split(' ').join('');
  let isEqual = true;
  let firstChar;
  let lastChar;

  for (let i = 0; i < lowerString.length; i++) {
    deque.addBack(lowerString.charAt(i));
  }

  while (deque.size() > 1 && isEqual) {
    firstChar = deque.removeFront();
    lastChar  = deque.removeBack();
    if (firstChar !== lastChar) {
      isEqual = false;
    }
  }

  return isEqual;
}

console.log('a', palindromeChecker('a'));                   // a true
console.log('level', palindromeChecker('level'));           // level true
console.log('JavaScript', palindromeChecker('JavaScript')); // JavaScript false
