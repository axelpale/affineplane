const EPSILON = require('../epsilon')

module.exports = (plane) => {
  // @affineplane.plane2.orientation(plane)
  //
  // The orientation of the plane, i.e. the rotation from default.
  // If the plane is singular, falls back to the default orientation.
  //
  // Parameters
  //   plane
  //     a plane2, in the reference basis
  //
  // Return
  //   a orient2, in the reference basis
  //
  const ma = plane.a
  const mb = plane.b
  const m = Math.sqrt(ma * ma + mb * mb)

  if (Math.abs(m) < EPSILON) {
    // Fall back to default orientation.
    return {
      a: 1,
      b: 0
    }
  }

  return {
    a: ma / m,
    b: mb / m
  }
}
