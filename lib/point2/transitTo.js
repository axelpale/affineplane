const inverse = require('../helm2/inverse')
const transitFrom = require('./transitFrom')

module.exports = (point, target) => {
  // affineplane.point2.transitTo(point, target)
  //
  // Transit a point2 to a target plane.
  // In other words, represent the point2
  // in the coordinate system of the plane.
  //
  // Parameters:
  //   point
  //     a point2 on the reference plane.
  //   target
  //     a plane2, the target plane, represented
  //     .. on the reference plane.
  //
  // Return:
  //   a point2, represented on the target plane.
  //

  // The plane is a mapping from itself to a target plane.
  // We need the projection from the target to the plane.
  const itarget = inverse(target)
  return transitFrom(point, itarget)
}
