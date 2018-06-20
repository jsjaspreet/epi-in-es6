module.exports = (A) => {
  let H = [], P = [], carry = 0, result = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] > 0) {
      if (H.length === 0) {
        H.push(A[i]);
        P.push(i);
      } else if (H[H.length - 1] <= A[i]) {
        let area = (i - P[P.length - 1] - 1) * H[H.length - 1];
        let adjustments = 0;
        for (let i = 0; i < H.length - 1; i++) {
          adjustments += H[i];
        }
        result += area - adjustments;
        carry = 0;
        H = [A[i]];
        P = [i];
      } else {
        let carryIndex;
        for (carryIndex = 0; carryIndex < H.length; carryIndex++) {
          if (H[carryIndex] >= A[i]) {
            break;
          }
        }
        let area = (i - P[carryIndex] - 1) * A[i];
        let adjustments = 0;
        for (let i = carryIndex-1; i >= 0; i--) {
          adjustments += H[i];
        }
        carry += area - adjustments;
        H.unshift(A[i]);
        P.unshift(i);
      }
    }
  }
  return result + carry;
};