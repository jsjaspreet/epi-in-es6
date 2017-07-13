const parity = require('./again')
const test = require('ava')

test('even parity', t => {
  t.is(0, parity(3))
})

test('0 parity', t => {
  t.is(0, parity(0))
})

test('odd parity', t => {
  t.is(1, parity(7))
})
