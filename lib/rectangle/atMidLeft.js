module.exports = (rect) => {
  return {
    x: rect.x,
    y: rect.y + rect.h / 2
  }
}
