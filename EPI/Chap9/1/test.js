import test from 'ava'
import maxStack from './again'

test('1, 2, 3', t => {
  const s = new maxStack()
  s.push(1)
  t.is(s.max(), 1)
  s.push(2)
  t.is(s.max(), 2)
  s.push(3)
  t.is(s.max(), 3)
  const x = s.pop()
  t.is(x, 3)
  t.is(s.max(), 2)
  t.is(s.peek(), 2)
})