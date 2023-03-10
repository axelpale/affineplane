const pointDiff = require('../point3/difference')
const cross = require('../vec3/cross')
const dot = require('../vec3/dot')
const magnitude = require('../vec3/magnitude')
const epsilon = require('../epsilon')

module.exports = (l, ll) => {
  // @affineplane.line3.intersection(l, ll)
  //
  // Find intersection point between two lines, if any.
  // If the lines are parallel but not equal, or the lines are skew,
  // no intersection exist and therefore the result is null.
  // If the lines are equal, while the whole line
  // would be the true intersection. However, in this case we pick
  // the origin point of the first line.
  //
  // Parameters
  //   l
  //     a line3
  //   ll
  //     a line3
  //
  // Return
  //   a point3 or null
  //

  // For line intersection, see Mathematical Structures by Janke 2015, p.54.
  // Basically we find such points on the lines that are closest to each other
  // and then test if their distance is zero.

  const spancross = cross(l.span, ll.span)
  const spanmagn = magnitude(spancross)
  const delta = pointDiff(l.origin, ll.origin)
  const deltacross0 = cross(delta, ll.span)

  if (Math.abs(spanmagn) < epsilon) {
    // Denominator zero => lines parallel.
    // If the same line, a vector between lines must be parallel with them.
    if (Math.abs(magnitude(deltacross0)) < epsilon) {
      // The same line. The whole line is the intersection
      // but we pick the origin point.
      return l.origin
    }
    // Parallel, but not the same, no intersection.
    return null
  }

  const deltacross1 = cross(delta, l.span)

  // The closest points along the lines, in the line basis.
  const numerator0 = dot(deltacross0, spancross)
  const numerator1 = dot(deltacross1, spancross)
  const denom = spanmagn * spanmagn
  const t0 = numerator0 / denom
  const t1 = numerator1 / denom

  // The closest points in the reference basis.
  const p0 = {
    x: l.origin.x + t0 * l.span.x,
    y: l.origin.y + t0 * l.span.y,
    z: l.origin.z + t0 * l.span.z
  }
  const p1 = {
    x: ll.origin.x + t1 * ll.span.x,
    y: ll.origin.y + t1 * ll.span.y,
    z: ll.origin.z + t1 * ll.span.z
  }

  // Test if the same point.
  const dx = Math.abs(p1.x - p0.x)
  const dy = Math.abs(p1.y - p0.y)
  const dz = Math.abs(p1.z - p0.z)
  if (dx + dy + dz < epsilon) {
    // Lines intersect.
    return p0
  }

  // Lines do not intersect
  return null
}
