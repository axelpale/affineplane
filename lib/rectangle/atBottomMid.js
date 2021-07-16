module.exports = (rect) => {
  return {
    x: rect.x + rect.w / 2,
    y: rect.y + rect.h
  }
}
