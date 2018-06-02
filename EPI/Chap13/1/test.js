const test = require('ava')
const anagramPartition = require('./')

test('[dog, god]', t => {
  t.deepEqual(anagramPartition(['dog', 'god']), {'dgo': ['dog', 'god']})
})