const diff = require('../point2/difference')

module.exports = (p, q) => {
  // affineplane.line2.fromPoints(p, q)
  //
  // Create a line from two points
  // with a spanning vector from p to q.
  //
  // Parameters:
  //   p
  //     a point2
  //   q
  //     a point2
  //
  // Return
  //   a line2
  //
  return {
    origin: p,
    span: diff(p, q)
  }
}
