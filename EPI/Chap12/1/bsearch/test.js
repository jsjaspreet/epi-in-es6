const test = require('ava');

function bSearch(hay, needle, lo, hi) {
  let i = lo, j = hi;
  console.log('i', lo);
  console.log('j', hi);
  while (i < j) {
    console.log('i', lo);
    console.log('j', hi);
    let mid = lo + Math.floor((hi - lo) / 2);
    if (hay[mid] === needle) {
      return mid;
    } else if (hay[mid] > needle) {
      j = mid;
    } else {
      i = mid + 1;
    }
  }
  return -1;
}

function b2(hay, needle) {
  let lo = 0, hi = hay.length;
  while (lo < hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    if (hay[mid] === needle) {
      return mid;
    } else if (hay[mid] > needle) {
      hi = mid;
    } else {
      lo = mid + 1;
    }
  }
  return -1;
}

test('simple', t => {
  const i = [1, 2, 2, 4, 5, 6, 7, 8];
  const idx = bSearch(i, 8, 0, i.length);
  t.is(7, idx);
});
