module.exports = (p) => {
  // affineplane.point3.validate(p)
  //
  // Check if the object is a valid point3.
  // Valid point3 has props x, y and z that are valid numbers.
  //
  // Parameter
  //   p
  //     an object
  //
  // Return
  //   a boolean, true if valid
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
  if (typeof p.z !== 'number' || Number.isNaN(p.z)) {
    return false
  }

  return true
}
