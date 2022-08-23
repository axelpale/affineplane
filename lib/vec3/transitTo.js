const invert = require('../helm3/inverse')

module.exports = (vec, plane) => {
  // Represent the vec on the target plane
  // without losing information.
  //
  // Parameters:
  //   vec
  //     a vec3 on the reference plane.
  //   plane
  //     a plane3 on the reference plane.
  //    .. The target plane.
  //
  // Return:
  //   a vec3, represented on the target plane.
  //

  // The plane is a mapping from itself to a target plane.
  // We need the projection from the target to the plane.
  const iplane = invert(plane)
  return {
    x: iplane.a * vec.x - iplane.b * vec.y,
    y: iplane.b * vec.x + iplane.a * vec.y,
    z: vec.z
  }
}