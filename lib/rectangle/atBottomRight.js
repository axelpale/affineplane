module.exports = (rect) => {
  return {
    x: rect.x + rect.w,
    y: rect.y + rect.h
  }
}
