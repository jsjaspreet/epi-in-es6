module.exports = (node) => {
  let [t, h] = [node, node];
  t = t.next;
  h = h.next;
  if (!h) {
    return null;
  }
  h = h.next;
  if (!h) {
    return null;
  }

  while (t !== h) {
    t = t.next;
    h = h.next;
    if (!h) {
      return null;
    }
    h = h.next;
  }


  t = node;
  while (t !== h) {
    t = t.next;
    h = h.next;
  }
  return t;
};