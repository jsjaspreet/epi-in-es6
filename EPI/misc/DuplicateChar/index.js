module.exports = function(str) {
  const seenLetters = new Set()
  for (const letter of str) {
    if (seenLetters.has(letter)) return true
    else seenLetters.add(letter)
  }
  return false
}