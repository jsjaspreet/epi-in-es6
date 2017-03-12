const test = require('ava')
const kSort = require('./')

test('[3, -1, 2, 6, 4, 5, 8]', t => {
  t.deepEqual([-1, 2, 3, 4, 5, 6, 8], kSort([3, -1, 2, 6, 4, 5, 8], 2))
})