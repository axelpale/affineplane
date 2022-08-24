const diff = require('./difference')
const dot = require('../vec2/dot')

module.exports = (p, line) => {
  // affineplane.point2.projectToLine(p, line)
  //
  // Project a point onto a line.
  //
  // Parameters:
  //   p
  //     a point2
  //   line
  //     a line2
  //
  // Return
  //   a point2
  //
  const orig = line.origin
  const v1 = line.span
  const v2 = diff(line.origin, p)
  // Dot product to get size of v2 on v1
  const len2 = dot(v1, v2)
  const len1 = dot(v1, v1)
  //
  return {
    x: orig.x + (len2 * v1.x) / len1,
    y: orig.y + (len2 * v1.y) / len1
  }
}
