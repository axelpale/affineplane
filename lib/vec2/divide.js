module.exports = (vec, divisor) => {
  // affineplane.vec2.divide(vec, divisor)
  //
  // The division of a vector.
  // Equivalent to multiplying the vector by the inverse of the divisor.
  // The direction of the vector does not change.
  //
  // Parameters:
  //   vec
  //     a vec2
  //   divisor
  //     a number
  //
  // Return
  //   a vec2
  //
  // Throws:
  //   if zero divisor
  //

  if (divisor === 0) {
    throw new Error('Cannot divide vector by zero. Vectors must be finite.')
  }
  return {
    x: vec.x / divisor,
    y: vec.y / divisor
  }
}
