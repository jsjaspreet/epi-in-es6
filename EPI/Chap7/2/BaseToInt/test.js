const test = require('ava')
const baseToInt = require('./')

test('simple', t => {
  t.is(15, baseToInt('F', 16))
})