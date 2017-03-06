const test = require('ava')
const spiral = require('./')
const { isEqual } = require('lodash')

test(`[[1, 2, 3],
       [4, 5, 6],
       [7, 8, 9]]`, t => {
  const x = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
  t.true(isEqual([1, 2, 3, 6, 9, 8, 7, 4, 5], spiral(x)))
})

test(`[[1, 2],
       [4, 3]]`, t => {
  const x = [[1, 2], [4, 3]]
  t.true(isEqual([1, 2, 3, 4], spiral(x)))
})
