const test = require('ava')
const reverse = require('./')

test('positive', t => {
  t.is(314, reverse(413))
})


test('positive 2', t => {
  t.is(314229, reverse(922413))
})

test('negative', t => {
  t.is(-314, reverse(-413))
})

test('negative 2', t => {
  t.is(-314001, reverse(-100413))
})

test('0', t => {
  t.is(0, reverse(0))
})
