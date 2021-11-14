import { Compare, defaultCompare, swap } from '../utils/index.js';

/**
 * 冒泡排序
 * 
 * 比较所有相邻的两项，如果第一个比第二个大，则交换它们
 * 
 * 步骤：
 * 1.获取数组长度
 * 2.外循环：确定排序的轮数，轮数和数组长度一致
 * 3.内循环：进行当前项和下一项比较（下一项指的是所有的其他项）
 * 4.交换
 * 
 * 内循环为什么是 length - 1 - i，而不是 length - 1
 * 如果从内循环减去外循环中已跑过的轮数，就可以避免内循环中所有不必要的比较
 */
function bubbleSort(array, compareFn = defaultCompare) {
  const { length } = array;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (compareFn(array[j], array[j+1]) === Compare.BIGGER_THAN) {
        swap(array, j, j+1);
      }
    }
  }

  return array;
}
