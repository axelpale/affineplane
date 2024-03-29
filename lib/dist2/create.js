module.exports = (d) => {
  // @affineplane.dist2.create(d)
  //
  // Create a distance measure.
  // Basically it is just the absolute value of the number.
  //
  // Parameters
  //   d
  //     a number
  //
  // Return
  //   a number, always zero or positive.
  //
  return Math.abs(d)
}
