const test = require('ava')
const kClosest = require('./')

test('[1, 2, 3, 4]', t => {
  t.deepEqual([1, 2].sort(), kClosest([1, 2, 3, 4], 2).sort())
})

test('[23, 21, 249, 9, 2]', t => {
  t.deepEqual([2, 9, 21].sort(), kClosest([23, 21, 249, 9, 2], 3).sort())
})
