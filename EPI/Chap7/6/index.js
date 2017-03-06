function reverse(string) {
  return string.split("").reverse().join("")
}
// Reverse words in a sentence
module.exports = function(sentence) {
  const reversedSentence = reverse(sentence)
  const reversedWords = reversedSentence.split(" ")
  const words = reversedWords.map(word => reverse(word))
  return words.join(" ")
}

