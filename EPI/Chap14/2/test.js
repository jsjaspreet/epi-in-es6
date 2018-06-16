const test = require('ava');
const mergeSort = require('./');


test('reverse', t => {
  const arr1 = new Array(9).fill(0);
  arr1[0] = 0;
  arr1[1] = 1;
  arr1[2] = 3;
  arr1[3] = 7;
  arr1[4] = 11;
  arr1[5] = 19;
  const arr2 = [5, 13, 17]
  t.deepEqual([0, 1, 3, 5, 7, 11, 13, 17, 19], mergeSort(arr1, 6, arr2, 3));
});

test('simple', t => {
  const arr1 = new Array(7).fill(0);
  arr1[0] = 5;
  arr1[1] = 13;
  arr1[2] = 17;
  const arr2 = [3, 7, 11, 19];
  t.deepEqual([3, 5, 7, 11, 13, 17, 19], mergeSort(arr1, 3, arr2, 4));
});