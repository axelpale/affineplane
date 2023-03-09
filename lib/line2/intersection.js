const pointDiff = require('../point2/difference')
const cross = require('../vec2/cross')
const epsilon = require('../epsilon')

module.exports = (l, ll) => {
  // @affineplane.line2.intersection(l, ll)
  //
  // Find intersection point between two lines, if any.
  // If the lines are parallel but not equal, no intersection exist and
  // therefore result is null.
  // If the lines are equal, while the whole line
  // would be the true intersection,
  // the result is the origin point of the first line.
  //
  // Parameters
  //   l
  //     a line2
  //   ll
  //     a line2
  //
  // Return
  //   a point2 or null
  //

  // For line intersection, see Mathematical Structures by Janke 2015, p.54.
  const spanmagn = cross(l.span, ll.span) // outputs magnitude for 2D vectors
  const delta = pointDiff(l.origin, ll.origin)
  const deltamagn = cross(delta, ll.span) // outputs magnitude for 2D vectors

  if (Math.abs(spanmagn) < epsilon) {
    // Denominator zero => lines parallel.
    // If the same line, a vector between lines must be parallel with them.
    if (Math.abs(deltamagn) < epsilon) {
      // The same line. The whole line is the intersection
      // but we pick the origin point.
      return l.origin
    }
    // Parallel, but not the same, no intersection.
    return null
  }

  const numerator = deltamagn * spanmagn
  const denom = spanmagn * spanmagn

  // The intersection point along the first line, in the line basis
  const t = numerator / denom

  // The intersection point in the reference basis.
  return {
    x: l.origin.x + t * l.span.x,
    y: l.origin.y + t * l.span.y
  }
}
