const test = require('ava')
const isPalindrome = require('./three')

test('31413 - true', t => {
  t.is(true, isPalindrome(31413))
})

test('314133 - false', t => {
  t.is(false, isPalindrome(314133))
})
