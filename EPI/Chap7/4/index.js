module.exports = function(input) {
  return input.join('').replace(/a/g, 'dd').replace(/b/g, '').split('')
}