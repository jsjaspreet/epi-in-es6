// Rectangle Intersection

class Rectangle {
  constructor({ x, y, width, height }) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
  }

  getAttributes() {
    return {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
    }
  }
}

function withinRange(first, second, third) {
  return first <= second < third
}

function withinXRange(R1, R2) {
  return withinRange(R1.x, R2.x, R1.x + R1.width) ||
    withinRange(R2.x, R1.x, R2.x + R2.width)
}

function withinYRange(R1, R2) {
  return withinRange(R1.y, R2.y, R1.y + R1.height) ||
    withinRange(R2.y, R1.y, R2.y + R2.height)
}

const intersection = (R1, R2) => {
  const hasIntersection = withinYRange(R1, R2) && withinXRange(R1, R2)
  if (hasIntersection) {
    const startingX = Math.max(R1.x, R2.x)
    const startingY = Math.max(R1.y, R2.y)
    const width = Math.min(R1.x + R1.width, R2.x + R2.width) - startingX
    const height = Math.min(R1.y + R1.height, R2.y + R2.height) - startingY
    return new Rectangle({ x: startingX, y: startingY, width, height })
  }
  return false
}

module.exports = {
  Rectangle,
  intersection
}

