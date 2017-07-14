const test = require('ava')
const { Rectangle, intersection } = require('./')

test('sanity', t => {
  const R1 = new Rectangle({ x: 1, y: 1, width: 1, height: 1 })
  const R2 = new Rectangle({ x: 1, y: 1, width: 1, height: 1 })
  t.deepEqual(R1.getAttributes(), R2.getAttributes())
})

test('intersection1', t => {
  const R1 = new Rectangle({ x: 1, y: 2, width: 3, height: 8 })
  const R2 = new Rectangle({ x: 2, y: 0, width: 1, height: 6 })
  const answer = new Rectangle({ x: 2, y: 2, width: 1, height: 4 })
  const int = intersection(R1, R2)
  t.deepEqual(int.getAttributes(), answer.getAttributes())
})

test('inclusive', t => {
  const R1 = new Rectangle({ x: 0, y: 0, width: 10, height: 10 })
  const R2 = new Rectangle({ x: 2, y: 2, width: 3, height: 3 })
  const int = intersection(R1, R2)
  t.deepEqual(R2.getAttributes(), int.getAttributes())
})

test('intersection2', t => {
  const R1 = new Rectangle({ x: 1, y: 1, width: 10, height: 10 })
  const R2 = new Rectangle({ x: 3, y: 5, width: 100, height: 100 })
  const R3 = new Rectangle({ x: 3, y: 5, width: 8, height: 6 })
  const int = intersection(R1, R2)
  t.deepEqual(R3.getAttributes(), int.getAttributes())
})

test('edge', t => {
  const R1 = new Rectangle({ x: 0, y: 0, width: 1, height: 1 })
  const R2 = new Rectangle({ x: 1, y: 0, width: 1, height: 1 })
  const int = intersection(R1, R2)
  t.is(false, int)
})
