module.exports = function(size, list) {
  const listLength = list.length
  for (let i = 0; i < size; i++) {
    const randomIdx = i + Math.floor((Math.random() * (listLength - i)))
    const tmp = list[i]
    list[i] = list[randomIdx]
    list[randomIdx] = tmp
  }
  return list.slice(0, size)
}