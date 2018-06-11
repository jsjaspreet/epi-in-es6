const ListNode = require('../rawLL');

module.exports = (lists) => {
  let dummyHead = new ListNode();
  let curr = dummyHead;
  const numLists = lists.length;
  while (curr) {
    let [minList, minVal, idx] = [null, Number.MAX_VALUE, -1];
    for (let i = 0; i < numLists; i++) {
      let currList = lists[i];
      if (currList && currList.val < minVal) {
        minList = currList;
        minVal = minList.val;
        idx = i;
      }
    }
    if (minList) {
      curr.next = minList;
      minList = minList.next;
      lists[idx] = minList;
    }
    curr = curr.next;
  }

  return dummyHead.next;
};