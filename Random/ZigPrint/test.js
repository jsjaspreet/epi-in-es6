const test = require('ava');
const zip = require('./');

test('simple', t => {
  const i = [
    'ICEGKK'.split(''),
    'ARFCIA'.split(''),
    'BDOHJL'.split(''),
  ];
  const o = zip(i);
  t.is('IROCKA', o);
});