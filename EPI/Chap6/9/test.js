const test = require('ava')
const sieve = require('./')
const { isEqual } = require('lodash')

test('6', t => {
  t.true(isEqual([2, 3, 5], sieve(6)))
})
test('7', t => {
  t.true(isEqual([2, 3, 5, 7], sieve(7)))
})

test('12', t => {
  t.true(isEqual([2, 3, 5, 7, 11], sieve(12)))
})


