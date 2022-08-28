const getMagnitude = require('./magnitude')

module.exports = (vec, magnitude) => {
  // affineplane.vec3.scaleTo(vec, magnitude)
  //
  // Scale the vector to a certain length.
  // The direction of the vector does not change.
  // As an exception, zero vector length remains zero.
  //
  // Parameters:
  //   vec
  //     a vec3, non-zero vector.
  //   magnitude
  //     a number, the target vector length
  //
  // Return
  //   a vec3
  //
  const currentMagn = getMagnitude(vec)

  if (currentMagn === 0) {
    // Zero vector cannot be scaled.
    return { x: 0, y: 0, z: 0 }
  }

  const factor = magnitude / currentMagn
  return {
    x: vec.x * factor,
    y: vec.y * factor,
    z: vec.z * factor
  }
}
