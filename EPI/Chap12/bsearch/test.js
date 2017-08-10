const test = require('ava')
const bsearch = require('./again')

test('[1, 2, 3], 3', t => {
  t.true(bsearch([1, 2, 3], 3)[0])
})


test('[1, 2, 3], 0', t => {
  t.false(bsearch([1, 2, 3], 0)[0])
})

test('[1], 1', t=> {
  t.true(bsearch([1], 1)[0])
})

test('[3], 1', t=> {
  t.false(bsearch([3], 1)[0])
})

test('[], 3', t => {
  t.false(bsearch([], 3)[0])
})

test('[1, 2, 3, 4, 5, 6, 7], 5', t => {
  t.true(bsearch([1, 2, 3, 4, 5, 6, 7], 5)[0])
})

test('[1, 2, 3, 4, 5, 6, 7], 8', t => {
  t.false(bsearch([1, 2, 3, 4, 5, 6, 7], 8)[0])
})
