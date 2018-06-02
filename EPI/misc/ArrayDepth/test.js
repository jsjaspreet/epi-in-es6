const test = require('ava');
const ArrayDepth = require('./');

test('[]', t => {
  t.is(ArrayDepth('[]'), 1);
});

test('bad input 1', t => {
  t.throws(() => ArrayDepth('fds[]'));
});

test('bad input 2', t => {
  t.throws(() => ArrayDepth('fds'));
});

test('bad input 3', t => {
  t.throws(() => ArrayDepth(''));
});

test('[[]]', t => {
  t.is(ArrayDepth('[[]]'), 2);
});

test('[1]', t => {
  t.is(ArrayDepth('[1]'), 1);
});

test('[[2, "abc"], {"a":1}]', t => {
  t.is(ArrayDepth('[[2, "abc"], {"a":1}]'), 2);
});

test('[[[[[[[3]]]]]]]', t => {
  t.is(ArrayDepth('[[[[[[[3]]]]]]]'), 7);
});

test('[1, [[2, 3, [[4], 5], 6, [7, 8]], 9, [10, [[[11]]]], 12, 13], 14]', t => {
  t.is(ArrayDepth('[1, [[2, 3, [[4], 5], 6, [7, 8]], 9, [10, [[[11]]]], 12, 13], 14]'), 6);
});
