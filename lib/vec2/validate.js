module.exports = (v) => {
  // @affineplane.vec2.validate(v)
  //
  // Check if object is a valid vec2.
  //
  // Parameter
  //   v
  //     an object
  //
  // Return
  //   a boolean
  //
  if (!v) {
    return false
  }

  if (typeof v.x !== 'number' || Number.isNaN(v.x)) {
    return false
  }
  if (typeof v.y !== 'number' || Number.isNaN(v.y)) {
    return false
  }

  return true
}
