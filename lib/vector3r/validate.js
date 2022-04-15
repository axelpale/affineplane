module.exports = (v) => {
  // Check if object is a valid vector3r.
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
  if (typeof v.r !== 'number' || Number.isNaN(v.r)) {
    return false
  }

  return true
}
