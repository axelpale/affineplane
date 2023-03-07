module.exports = (d) => {
  // @affineplane.dist2.validate(d)
  //
  // Check if the argument is a valid dist2.
  // Valid dist2 is a zero or positive number and not NaN.
  //
  // Parameter
  //   d
  //     a value
  //
  // Return
  //   a boolean, true if valid
  //
  if (typeof d !== 'number') {
    return false
  }

  if (Number.isNaN(d)) {
    return false
  }

  if (d < 0) {
    return false
  }

  return true
}
