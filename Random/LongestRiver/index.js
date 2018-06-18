module.exports = class LongestRiver {
  constructor(map) {
    this.riverMap = map;
    this.numRows = map.length;
    this.numColumns = map[0].length;
    this.visitedMap = [];
    for (let i = 0; i < this.numRows; i++) {
      this.visitedMap.push(new Array(this.numColumns).fill(false));
    }
  }

  isValidCoord(i, j) {
    const isValid = (0 <= i) && (i < this.numRows) && (0 <= j) && (j < this.numColumns);
    return isValid;
  }

  isSameRiver(i, j, val) {
    const sameRiver = this.riverMap[i][j] === val;
    return sameRiver;
  }

  getNeighbors(i, j, val) {
    let neighbors = [];
    neighbors.push([i + 1, j]);
    neighbors.push([i - 1, j]);
    neighbors.push([i, j + 1]);
    neighbors.push([i, j - 1]);
    neighbors = neighbors.filter(([row, column]) => this.isValidCoord(row, column) && this.isSameRiver(row, column, val));
    return neighbors;
  }

  haveVisited([i, j]) {
    return this.visitedMap[i][j];
  }

  markVisited([i, j]) {
    this.visitedMap[i][j] = true;
  }

  getVal([i, j]) {
    return this.riverMap[i][j];
  }

  longestRiverSize() {
    let currRiverLength = 0;
    let maxRiverLength = 0;
    for (let i = 0; i < this.numRows; i++) {
      for (let j = 0; j < this.numColumns; j++) {
        let currCoord = [i, j];
        let currVal = this.getVal(currCoord);
        if (!this.haveVisited(currCoord)) {
          let riverNodes = [currCoord];
          while (riverNodes.length !== 0) {
            const node = riverNodes.shift();
            if (!this.haveVisited(node)) {
              this.markVisited(node);
              currRiverLength++;
              maxRiverLength = Math.max(maxRiverLength, currRiverLength);
              const neighborNodes = this.getNeighbors(node[0], node[1], currVal);
              riverNodes.push(...neighborNodes);
            }
          }
          currRiverLength = 0;
        }
      }
    }
    return maxRiverLength;
  }
};