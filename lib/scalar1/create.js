module.exports = (d) => {
  // @affineplane.scalar1.create(d)
  //
  // Create a valid scalar. Basically it is just the number itself.
  //
  // Parameters
  //   d
  //     a number
  //
  // Return
  //   a number, the scalar.
  //
  // Throws
  //   if the argument is not a number or is NaN
  //
  if (typeof d !== 'number' || isNaN(d)) {
    throw new Error('Invalid scalar value: ' + d)
  }

  return d
}
