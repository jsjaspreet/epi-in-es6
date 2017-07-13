const bsearch = require('../bsearch')

module.exports = function(hay, needle) {
  let [contains, index] = bsearch(hay, needle)
  if (!contains) {
    return null
  }
  while (contains) {
    const newSearch = bsearch(hay.slice(0, index), needle)
    contains = newSearch[0]
    let newIndex = newSearch[1]
    if (contains) {
      index = newIndex
    }
  }
  return index
}