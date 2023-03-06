module.exports = (p) => {
  // @affineplane.sphere2.validate(p)
  //
  // Check if the object is a valid sphere2.
  // A valid sphere2 has x, y, r properties that are valid numbers.
  //
  // Parameter
  //   p
  //     an object
  //
  // Return
  //   a boolean, true if valid sphere2
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
  if (typeof p.r !== 'number' || Number.isNaN(p.r)) {
    return false
  }

  return true
}
