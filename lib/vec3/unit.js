const magnitude = require('./magnitude')

module.exports = (v) => {
  // affineplane.vec3.unit(v)
  //
  // Get unit vector parallel to the given vector.
  // The magnitude of unit vector is equal to one.
  // If zero vector is given, assume direction towards positive x.
  //
  // Parameters:
  //   v
  //     a vec3
  //
  // Return
  //   a vec3, magnitude of one.
  //
  const m = magnitude(v)

  if (m > 0) {
    return {
      x: v.x / m,
      y: v.y / m,
      z: v.z / m
    }
  }
  return {
    x: 1,
    y: 0,
    z: 0
  }
}
