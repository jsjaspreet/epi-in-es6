const test = require('ava')
const firstOccurence = require('./again')

test('[5], 5', t => {
  t.is(0, firstOccurence([5], 5))
})

test('[1, 2, 2, 4, 5, 6, 7, 8], 8', t => {
  t.is(7, firstOccurence([1, 2, 2, 4, 5, 6, 7, 8], 8))
})


test('[1, 2, 2, 4, 5, 6, 7], 7', t => {
  t.is(6, firstOccurence([1, 2, 2, 4, 5, 6, 7], 7))
})

test('[1, 2, 2, 4, 5, 6], 6', t => {
  t.is(5, firstOccurence([1, 2, 2, 4, 5, 6], 6))
})

test('[1, 2, 2, 4, 5, 6], 2', t => {
  t.is(1, firstOccurence([1, 2, 2, 4, 5, 6], 2))
})

test('[-14, -10, 2, 108, 108, 243, 2834, 90349009], 108', t => {
  t.is(3, firstOccurence([-14, -10, 2, 108, 108, 243, 2834, 90349009], 108))
})

test('[-14, -10, 2, 108, 108, 243, 2834, 90349009], 108', t => {
  t.is(-1, firstOccurence([-14, -10, 2, 108, 108, 243, 2834, 90349009], 1082))
})
