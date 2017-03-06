const test = require('ava')
const baseConvert = require('./')

test("10, 10, 16", t => {
  t.is("A", baseConvert("10", 10, 16))
})

test("A, 16, 10", t => {
  t.is("10", baseConvert("A", 16, 10))
})

test("4, 10, 2", t => {
  t.is("100", baseConvert("4", 10, 2))
})

test("5, 10, 2", t => {
  t.is("101", baseConvert("5", 10, 2))
})

test("101, 2, 10", t => {
  t.is("5", baseConvert("101", 2, 10))
})
