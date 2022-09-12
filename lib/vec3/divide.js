module.exports = (vec, divisor) => {
  // affineplane.vec3.divide(vec, divisor)
  //
  // The division of a vector.
  // Equivalent to multiplying the vector by the inverse of the divisor.
  // The direction of the vector does not change.
  //
  // Parameters:
  //   vec
  //     a vec3
  //   divisor
  //     a number. If zero, will result a vector having infinite length.
  //
  // Return
  //   a vec3
  //
  if (divisor === 0) {
    throw new Error('Cannot divide vector by zero. Vectors must be finite.')
  }
  return {
    x: vec.x / divisor,
    y: vec.y / divisor,
    z: vec.z / divisor
  }
}
