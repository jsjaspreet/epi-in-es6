const test = require('ava')
const maxProfit = require('./again')

test('[10, 100, 3, 3]', t => {
  t.is(90, maxProfit([10, 100, 3, 3]))
})

test('[100, 3, 3]', t => {
  t.is(0, maxProfit([100, 3, 3]))
})

test('[10, 100, 3, 3, 1, 1001]', t => {
  t.is(1000, maxProfit([10, 100, 3, 3, 1, 1001]))
})

