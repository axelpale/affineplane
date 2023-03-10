module.exports = (p) => {
  // @affineplane.sphere3.validate(p)
  //
  // Check if the object is a valid sphere3.
  // A valid sphere3 has x, y, z, r properties that are valid numbers.
  //
  // Parameter
  //   p
  //     an object
  //
  // Return
  //   a boolean, true if valid sphere3
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
  if (typeof p.r !== 'number' || Number.isNaN(p.r)) {
    return false
  }

  return true
}
