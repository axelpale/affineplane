const epsilon = require('../epsilon')

module.exports = (v) => {
  // affineplane.dir2.fromVector(v)
  //
  // Create a new direction from a vector.
  // Basically, extract an unit vector from the given vector.
  // If given a zero vector, return a
  // direction towards positive x-axis.
  //
  // Parameters
  //   v
  //     a vec2
  //
  // Return
  //   a dir2
  //

  // Normalize to unit vector
  const x = v.x
  const y = v.y
  const m = Math.sqrt(x * x + y * y)

  // Handle arbitrary direction.
  if (m < epsilon) {
    return {
      x: 1,
      y: 0
    }
  }

  return {
    x: x / m,
    y: y / m
  }
}
