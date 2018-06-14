const test = require('ava');
const DLL = require('./');

test('operations', t => {
  const D = new DLL();
  t.is(D.size, 0);
  D.append(1);
  D.append(2);
  t.is(D.size, 2);
  t.is(D.get(1).data, 2);
  D.append(3);
  t.is(D.size, 3);
  t.is(D.get(2).data, 3);
  D.unshift(0);
  t.is(D.get(0).data, 0);

  let head = D.get(0);
  D.delete(head);
  t.is(D.get(0).data, 1);
  let tail = D.get(2);
  D.delete(tail);
  t.is(D.get(0).data, 1);
  t.is(D.get(1).data, 2);
  D.append(3);
  let mid = D.get(1);
  D.delete(mid);
  t.is(D.get(0).data, 1);
  t.is(D.get(1).data, 3);
  t.is(D.size, 2);
  D.deleteTail();
  t.is(D.get(0).data, 1);
  t.is(D.size, 1);
});
