const test = require('ava')
const palindrome = require('./')

test("ava", t=> {
  t.true(palindrome("ava"))
})

test("A man, a plan, a canal, panama", t => {
  t.true(palindrome("A man, a plan, a !!! canal, panama!!!"))
})

test("A wman, a plan, a canal, panama", t => {
  t.false(palindrome("A mwan, a plan, a !!! canal, panama!!!"))
})
