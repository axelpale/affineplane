const at = require('./at')

module.exports = (rect) => {
  return at(rect, rect.w, rect.h / 2)
}
