module.exports = (v) => {
  // @affineplane.vec3.validate(v)
  //
  // Check if object is a valid vec3.
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
  if (typeof v.z !== 'number' || Number.isNaN(v.z)) {
    return false
  }

  return true
}
