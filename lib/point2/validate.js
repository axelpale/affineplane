module.exports = (p) => {
  // @affineplane.point2.validate(p)
  //
  // Check if the object is a valid point2.
  // Valid point2 has x and y properties that are valid numbers.
  //
  // Parameter
  //   p
  //     an object
  //
  // Return
  //   a boolean, true if valid point2
  //
  if (!p) {
    return false
  }

  if (typeof p.x !== 'number' || Number.isNaN(p.x)) {
    return false
  }
  if (typeof p.y !== 'number' || Number.isNaN(p.y)) {
    return false
  }

  return true
}
