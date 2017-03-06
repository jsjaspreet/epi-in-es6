// Random Sampling
module.exports = function(size, list) {
  for (let i = 0; i < size; i++) {
    let randomIndex = i + (Math.random() * (list.length - i))
    let tmp = list[i]
    list[i] = tmp
    list[randomIndex] = tmp
  }
  return list.slice(0, size)
}