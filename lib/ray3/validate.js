module.exports = (r) => {
  // @affineplane.ray3.validate(r)
  //
  // Check if object is a valid ray3.
  //
  // Parameter
  //   r
  //     an object
  //
  // Return
  //   a boolean
  //
  if (!r) {
    return false
  }

  if (typeof r.x !== 'number' || Number.isNaN(r.x)) {
    return false
  }
  if (typeof r.y !== 'number' || Number.isNaN(r.y)) {
    return false
  }
  if (typeof r.z !== 'number' || Number.isNaN(r.z)) {
    return false
  }
  if (typeof r.dx !== 'number' || Number.isNaN(r.dx)) {
    return false
  }
  if (typeof r.dy !== 'number' || Number.isNaN(r.dy)) {
    return false
  }
  if (typeof r.dz !== 'number' || Number.isNaN(r.dz)) {
    return false
  }

  return true
}
