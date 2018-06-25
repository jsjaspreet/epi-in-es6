const test = require('ava');
const ws = require('./');

test('complex', t => {
  const i = ['abat', 'baba', 'atan', 'atal'];
  const o = [['baba', 'abat', 'baba', 'atal'], ['baba', 'abat', 'baba', 'atan']];
  const aO = ws(i);
  t.deepEqual(o.sort(), aO.sort());
});


test('simple', t => {
  const i = ['wall', 'lead', 'area', 'lady', 'ball'];
  const o = [
    ['wall',
      'area',
      'lead',
      'lady'
    ],
    ['ball',
      'area',
      'lead',
      'lady'
    ]
  ];

  const aO = ws(i);

  t.deepEqual(o, aO);
});