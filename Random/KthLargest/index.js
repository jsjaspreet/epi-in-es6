const exch = (arr, i, j) => {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};


const partition = (arr, lo, hi) => {
  let i = lo;
  let j = hi + 1;
  while (true) {
    while (i < hi && arr[++i] < arr[lo])
      while (j > lo && arr[lo] < arr[--j])
        if (i >= j) {
          break;
        }
    exch(arr, i, j);
  }
  exch(arr, lo, j);
  return j;
};