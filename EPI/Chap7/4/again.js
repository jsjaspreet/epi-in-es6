Array.prototype.flatMap = function(lambda) {
  return Array.prototype.concat.apply([], this.map(lambda));
};

module.exports = function(arr) {
  // remove all d's
  let dFilter = arr.filter(element => element !== 'b')
  return dFilter.flatMap(element => {
    if (element === 'a') {
      return ['d', 'd']
    } else {
      return element
    }
  })
}