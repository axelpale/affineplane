const invert = require('../helm2/invert')
const transitFrom = require('./transitFrom')

module.exports = (vec, plane) => {
  // affineplane.vec2.transitTo(vec, plane)
  //
  // Transit a vec2 to a target plane.
  // In other words, represent the vec2
  // in the coordinate system of the plane.
  // Translation of the plane does not affect the vector.
  //
  // Parameters:
  //   vec
  //     a vec2 on the reference plane.
  //   plane
  //     a plane2, the target plane, represented
  //     .. on the reference plane.
  //
  // Return:
  //   a vec2, represented on the target plane.
  //

  // The plane is a mapping from itself to a target plane.
  // We need the projection from the target to the plane.
  const iplane = invert(plane)
  return transitFrom(vec, iplane)
}
