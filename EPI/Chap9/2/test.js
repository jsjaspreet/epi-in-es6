import test from 'ava'
import rpn from './'

test('2, 3, +', t => {
  t.is(rpn(['2', '3', '+']), 5)
})

test('2, 3, +, 2, *', t => {
  t.is(rpn(['2', '3', '+', '2', '*']), 10)
})
