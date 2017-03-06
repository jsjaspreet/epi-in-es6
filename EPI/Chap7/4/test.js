const test = require('ava')
const RandR = require('./')
const { isEqual } = require('lodash')

test('[a, c, d ,b, b, c, a]', t => {
  t.true(isEqual(['d', 'd', 'c', 'd', 'c', 'd', 'd'], RandR(['a', 'c', 'd', 'b', 'b', 'c', 'a'])))
})