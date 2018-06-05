const test = require('ava');
const LinkedList = require('./');


test('size 1', t => {
  const L = new LinkedList();
  L.addAtHead(1);
  L.addAtTail(2);
  t.is(L.size, 2);
});

test('simple', t => {
  const L = new LinkedList();
  L.addAtHead(1);
  L.addAtTail(2);
  t.is(L.get(0), 1);
  t.is(L.get(1), 2);
});

test('delete 1', t => {
  const L = new LinkedList();
  L.addAtHead(1);
  L.addAtTail(2);
  L.deleteAtIndex(1);
  t.is(L.get(0), 1);
  t.is(L.size, 1);
  t.true(L.head === L.tail);
});

test('delete all', t => {
  const L = new LinkedList();
  L.addAtHead(1);
  L.addAtTail(2);
  L.deleteAtIndex(1);
  L.deleteAtIndex(0);
  t.is(L.size, 0);
});

test('simple 2', t => {
  const L = new LinkedList();
  L.addAtHead(1);
  L.addAtTail(2);
  L.addAtTail(3);
  t.is(L.get(0), 1);
  t.is(L.get(1), 2);
  t.is(L.get(2), 3);
});

test('simple 3', t => {
  const L = new LinkedList();
  L.addAtHead(1);
  L.addAtTail(2);
  L.addAtTail(3);
  L.addAtHead(4);
  t.is(L.get(0), 4);
  t.is(L.get(1), 1);
  t.is(L.get(2), 2);
  t.is(L.get(3), 3);
  t.is(L.size, 4);
});


test('add simple', t => {
  const L = new LinkedList();
  L.addAtIndex(0, 1);
  t.is(L.size, 1);
  t.is(L.get(0), 1);
});


test('add simple 2', t => {
  const L = new LinkedList();
  L.addAtIndex(0, 1);
  L.addAtIndex(1, 2);
  t.is(L.size, 2);
  t.is(L.get(0), 1);
  t.is(L.get(1), 2);
});


test('big stuff', t => {
  const L = new LinkedList();
  L.addAtIndex(0, 1);
  L.addAtIndex(1, 2);
  L.addAtIndex(2, 3);
  t.is(L.size, 3);
  t.is(L.get(0), 1);
  t.is(L.get(1), 2);
  t.is(L.get(2), 3);

  // delete
  L.deleteAtIndex(1);
  t.is(L.size, 2);
  t.is(L.get(0), 1);
  t.is(L.get(1), 3);


  // again
  L.deleteAtIndex(1);
  t.is(L.size, 1);
  t.is(L.get(0), 1);
  t.true(L.head === L.tail);
});
