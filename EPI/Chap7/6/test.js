const test = require('ava')
const reverse = require('./')

test("Bob Likes Ana", t => {
  t.is("Ana Likes Bob", reverse("Bob Likes Ana"))
})