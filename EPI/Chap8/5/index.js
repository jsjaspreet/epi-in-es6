function getLength(LL) {
  if (!LL) return 0
  return 1 + getLength(LL.next)
}

function advanceByK(LL, k) {
  for (let i = 0; i < k; i++) {
    LL = LL.next
  }
  return LL
}

module.exports = function(L1, L2) {
  const L1Length = getLength(L1)
  const L2Length = getLength(L2)
  if (L1.length > L2.length) {
    L1 = advanceByK(L1, L1.length - L2.length)
  }
  if (L2.length > L1.length) {
    L2 = advanceByK(L2, L2.length - L1.length)
  }
  while (L1 && L2 && L1 !== L2) {
    L1 = L1.next
    L2 = L2.next
  }
  return L1 !== null
}