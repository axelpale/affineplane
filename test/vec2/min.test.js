module.exports = (v, w) => {
  // Element-wise minimum of two vectors
  return {
    x: Math.min(v.x, w.x),
    y: Math.min(v.y, w.y)
  }
}
