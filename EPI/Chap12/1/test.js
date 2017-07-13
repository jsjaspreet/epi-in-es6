const test = require('ava')
const firstOccurence = require('./')

test('[1, 2, 2, 4, 5, 6], 2', t => {
  t.is(1, firstOccurence([1, 2, 2, 4, 5, 6], 2))
})

test('[-14, -10, 2, 108, 108, 243, 2834, 90349009], 108', t => {
  t.is(3, firstOccurence([-14, -10, 2, 108, 108, 243, 2834, 90349009], 108))
})

test('[-14, -10, 2, 108, 108, 243, 2834, 90349009], 108', t => {
  t.is(null, firstOccurence([-14, -10, 2, 108, 108, 243, 2834, 90349009], 1082))
})
