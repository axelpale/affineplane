module.exports = (v) => {
  // Check if object is a valid vector.
  //
  // Parameter
  //   v
  //     an object
  //
  // Return
  //   boolean
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
