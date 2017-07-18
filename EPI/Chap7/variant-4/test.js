const test = require('ava')
const merge = require('./')
const { isEqual } = require('lodash')

test('[1, 3], [2, 4]', t => {
  t.true(isEqual([1, 2, 3, 4], merge([1, 3], [2, 4])))
})
test('[], [2, 4]', t => {
  t.true(isEqual([2, 4], merge([], [2, 4])))
})

test('[2, 4], []', t => {
  t.true(isEqual([2, 4], merge([2, 4], [])))
})

test('[1, 3, 100], [2, 4, 7, 9]', t => {
  t.true(isEqual([1, 2, 3, 4, 7, 9, 100], merge([1, 3, 100], [2, 4, 7, 9])))
})

test('[], []', t => {
  t.true(isEqual([], merge([], [])))
})
