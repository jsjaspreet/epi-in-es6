const test = require('ava')
const exp = require('./fourth')

test('Math.pow(3,2)', t => {
  t.is(Math.pow(3, 2), exp(3, 2))
})

test('Math.pow(-3,1)', t => {
  t.is(Math.pow(-3, 1), exp(-3, 1))
})


test('Math.pow(7,11)', t => {
  t.is(Math.pow(7, 11), exp(7, 11))
})

test('Math.pow(7,-2)', t => {
  t.is(Math.pow(7, -2), exp(7, -2))
})

test('Math.pow(3,0)', t => {
  t.is(Math.pow(3, 0), exp(3, 0))
})

test('Math.pow(4,12)', t => {
  t.is(Math.pow(4, 12), exp(4, 12))
})




