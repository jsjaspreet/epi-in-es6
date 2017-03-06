const test = require('ava')
const bump = require('./')
const { isEqual }= require('lodash')

test('[1, 2]', t => {
  t.true(isEqual([1, 3], bump([1, 2])))
})

test('[9, 9]', t => {
  t.true(isEqual([1, 0, 0], bump([9, 9])))
})


test('[1, 9, 9]', t => {
  t.true(isEqual([2, 0, 0], bump([1, 9, 9])))
})
