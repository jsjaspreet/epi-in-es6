const test = require('ava')
const mergeSorted = require('./')

test('[1, 2], [3, 4]', t => {
  const merged = mergeSorted([1, 2], [3, 4])
  t.deepEqual(merged, [1, 2, 3, 4])
})