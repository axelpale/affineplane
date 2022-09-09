const magnitude = require('./magnitude')

module.exports = (v) => {
  // affineplane.vec2.unit(v)
  // affineplane.vec2.normalize
  //
  // Get unit vector parallel to the given vector.
  // The magnitude of unit vector is equal to one.
  // If zero vector is given, assume direction towards positive x.
  //
  // Parameters:
  //   v
  //     a vec2
  //
  // Return
  //   a vec2, magnitude of one.
  //
  const m = magnitude(v)

  if (m > 0) {
    return {
      x: v.x / m,
      y: v.y / m
    }
  }
  return {
    x: 1,
    y: 0
  }
}
