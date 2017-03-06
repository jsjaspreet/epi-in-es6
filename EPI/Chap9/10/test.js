import test from 'ava'
import CircularQueue from './'

test('circular queue', t => {
  const x = new CircularQueue(2)
  x.queue(1)
  x.queue(2)
  x.queue(3)
  x.queue(4)
  t.is(x.dequeue(), 1)
  t.is(x.dequeue(), 2)
  t.is(x.dequeue(), 3)
  t.is(x.dequeue(), 4)
})
