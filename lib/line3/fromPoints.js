const diff = require('../point3/difference')

module.exports = (p, q) => {
  // @affineplane.line3.fromPoints(p, q)
  //
  // Create a line from two points
  // with a spanning vector from p to q.
  //
  // Parameters:
  //   p
  //     a point3
  //   q
  //     a point3
  //
  // Return
  //   a line3
  //
  return {
    origin: p,
    span: diff(p, q)
  }
}
