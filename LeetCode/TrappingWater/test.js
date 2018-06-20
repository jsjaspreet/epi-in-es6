const test = require('ava');
const Trap = require('./');

test('simple', t => {
  const A = [0];
  t.is(0, Trap(A));
});

test('flip', t => {
  const A = [2, 0, 1];
  t.is(1, Trap(A));
});

test('tall', t => {
  const A = [2, 0, 2];
  t.is(2, Trap(A));
});

test('1', t => {
  const A = [1, 0, 2];
  t.is(1, Trap(A));
});

test('hard', t => {
  const A = [2, 0, 1, 2];
  t.is(3, Trap(A));
});

test('extra hard', t => {
  const A = [1, 0, 1, 2, 0, 1, 2, 0, 1];
  t.is(5, Trap(A));
});

test('extra extra hard', t => {
  const A = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
  t.is(6, Trap(A));
});


test('test1+2', t => {
  const A = [0, 1, 0, 2, 1, 0, 1, 3];
  t.is(5, Trap(A));
});


test('test1', t => {
  const A = [0, 1, 0, 2];
  t.is(1, Trap(A));
});

test('test2', t => {
  const A = [2, 1, 0, 1, 3];
  t.is(4, Trap(A));
});


test('test3', t => {
  const A = [2, 1, 2];
  t.is(1, Trap(A));
});

test('test5', t => {
  const A = [3, 2, 1, 2, 1];
  t.is(1, Trap(A));
});
