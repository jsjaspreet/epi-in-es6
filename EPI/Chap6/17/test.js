const test = require('ava')
const helper = require('./')

test('[1, 2, 3, 4, 5, 0, 0, 0, 0]', t => {
  t.true(helper([1, 2, 3, 4, 5, 0, 0, 0, 0]))
})

test('[1, 2, 3, 5, 5, 0, 0, 0, 0]', t => {
  t.false(helper([1, 2, 3, 5, 5, 0, 0, 0, 0]))
})
