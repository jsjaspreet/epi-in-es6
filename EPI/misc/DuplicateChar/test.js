const test = require('ava')
const dupChar = require('./')

test("aab", t => {
  t.true(dupChar("aab"))
})

test("ab", t => {
  t.false(dupChar("ab"))
})
