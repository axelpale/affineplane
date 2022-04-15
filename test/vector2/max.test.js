module.exports = (v, w) => {
  // Element-wise maximum of two vectors
  return {
    x: Math.max(v.x, w.x),
    y: Math.max(v.y, w.y)
  }
}
