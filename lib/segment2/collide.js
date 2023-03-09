const pointDiff = require('../point2/difference')
const dot = require('../vec2/dot')
const epsilon = require('../epsilon')

module.exports = function (s0, s1) {
  // @affineplane.segment2.collide(s0, s1)
  //
  // Test if two segments collide.
  //
  // Parameters:
  //   s0
  //     a segment2
  //   s1
  //     a segment2
  //
  // Return:
  //   a boolean, true if segments collide.
  //

  // See Janke 2015, p. 61: Intersection of Line Segments
  // Basically, we can determine whether the segments collide without
  // needing to know the intersection point. We can do that by
  // finding if the endpoints are always at different sides of the segment line
  // for both segments.

  // End points
  const p0 = s0[0]
  const p1 = s0[1]
  const q0 = s1[0]
  const q1 = s1[1]
  // Line spanning vectors
  const vp = pointDiff(p0, p1)
  const vq = pointDiff(q0, q1)

  // Line normals
  const np = { x: -vp.y, y: vp.x }
  const nq = { x: -vq.y, y: vq.x }
  // Test s0 endpoints against s1 normal. Projects to normal.
  const dqp0 = dot(nq, pointDiff(p0, q0))
  const dqp1 = dot(nq, pointDiff(p1, q0))
  // Must be on different sides to intersect. Discriminant.
  const qDiscr = dqp0 * dqp1
  // Escape early if no cut
  if (qDiscr > 0) {
    return false
  }
  // Test s1 endpoints against s0 normal. Projects to normal.
  const dpq0 = dot(np, pointDiff(q0, p0))
  const dpq1 = dot(np, pointDiff(q1, p0))
  // Must be on different sides to intersect. Discriminant.
  const pDiscr = dpq0 * dpq1

  if (qDiscr < 0 && pDiscr < 0) {
    // Segments cross.
    return true
  }

  // Segments can still be parallel and overlapping.
  if (Math.abs(qDiscr) < epsilon && Math.abs(pDiscr) < epsilon) {
    // Assume parallel because the both projected discriminants are zero.
    // Test if the segments overlap.
    // Represent s1 points on line s0.
    const magn2 = vp.x * vp.x + vp.y * vp.y
    const tq0 = dot(vp, pointDiff(p0, q0)) / magn2
    const tq1 = dot(vp, pointDiff(p0, q1)) / magn2

    // If they at between 0..1, they on the seqment s0.
    if ((tq0 >= 0 && tq0 <= 1) || (tq1 >= 0 && tq1 <= 1)) {
      return true
    }
  }

  // No collision
  return false
}
