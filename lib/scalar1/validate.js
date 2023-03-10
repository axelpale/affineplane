module.exports = (s) => {
  // @affineplane.scalar1.validate(s)
  //
  // Check if the argument is a valid scalar1.
  // Valid scalar1 is a number and not NaN.
  //
  // Parameter
  //   s
  //     a value
  //
  // Return
  //   a boolean, true if valid scalar1
  //
  if (typeof s !== 'number') {
    return false
  }

  if (Number.isNaN(s)) {
    return false
  }

  return true
}
