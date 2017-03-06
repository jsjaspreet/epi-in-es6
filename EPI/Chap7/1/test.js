const test = require('ava')
const { stringToInteger, integerToString } = require('./')

test("1", t=> {
  t.is(1, stringToInteger("1"))
})
test("12", t=> {
  t.is(12, stringToInteger("12"))
})

test("0", t=> {
  t.is(0, stringToInteger("0"))
})

test("int 0", t=> {
  t.is("0", integerToString(0))
})

test("int 1", t=> {
  t.is("1", integerToString(1))
})

test("int 12", t=> {
  t.is("12", integerToString(12))
})
