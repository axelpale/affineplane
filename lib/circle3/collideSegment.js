const segToVector = require('../segment3/toVector')
const vecMultiply = require('../vec3/scaleBy')
const pointTranslate = require('../point3/translate')
const EPSILON = require('../epsilon')
const hasPoint = require('./hasPoint')

module.exports = (c, seg) => {
  // @affineplane.circle3.collideSegment(c, seg)
  //
  // Detect collision between a circle and a line segment.
  //
  // Parameters:
  //   c
  //     a circle3
  //   seg
  //     a segment3
  //
  // Return
  //   boolean, true if the shapes collide
  //

  // Does the segment cross the circle plane?
  // If both segment ends are on the same side of the plane,
  // the segment cannot cross the circle.
  const s0 = seg[0]
  const s1 = seg[1]
  const dz0 = s0.z - c.z
  const dz1 = s1.z - c.z
  if (dz0 * dz1 > 0) {
    return false
  }

  // Assert: segment intersects the circle plane.

  const segdz = s1.z - s0.z
  if (Math.abs(segdz) < EPSILON) {
    // Unsafe to divide. Segment points very close to the circle plane.
    // Test one of the points directly.
    return hasPoint(c, s0)
  }

  // Find intersection point. Because the circle plane is parallel to xy-plane
  // we can find the point easily by starting from the first segment point
  // and then adding a vector to it, scaled by the normalized dz distance.
  const vec = segToVector(seg)
  // If z0 at -1 and z1 at +1 and cz at 0, then dz0=-1 and z1-z0=2
  const t = -dz0 / segdz
  const svec = vecMultiply(vec, t)
  // Find the intersection point.
  const inter = pointTranslate(s0, svec)

  // Assert the intersection point is on the circle plane.

  // Test if the intersection point is within the circle.
  const dx = inter.x - c.x
  const dy = inter.y - c.y
  const limit = c.r
  // Replace square root with a multiplication: compare squares
  return dx * dx + dy * dy <= limit * limit
}
