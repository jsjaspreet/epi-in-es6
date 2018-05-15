module.exports = (sorted) => {
  const filtered = [];
  let curr = null;
  for (const val of sorted) {
    if (val !== curr) {
      filtered.push(val);
      curr = val;
    }
  }
  return filtered;
};