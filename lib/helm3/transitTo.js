const inverse = require('../helm3/inverse')
const transitFrom = require('./transitFrom')

module.exports = (tr, plane) => {
  // Transit a helm3 to a target plane.
  // In other words, represent the helm3
  // in the coordinate system of the plane.
  //
  // Parameters:
  //   tr
  //     a helm3 transformation on the reference plane.
  //   plane
  //     a plane3, the target plane, represented
  //     on the reference plane.
  //
  // Return:
  //   a helm3, represented on the target plane.
  //

  // The plane is a mapping from itself to a target plane.
  // We need the projection from the target to the plane.
  const iplane = inverse(plane)
  return transitFrom(tr, iplane)
}
