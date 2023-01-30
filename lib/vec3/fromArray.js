module.exports = (arrv) => {
  // @affineplane.vec3.fromArray(arrv)
  //
  // Create a vec3 from an array `[x, y, z]`.
  //
  // Parameters:
  //   arrv
  //     an array
  //
  // Return
  //   a vec3
  //
  // Throws
  //   if arrv has less than three elements.
  //
  if (arrv.length < 3) {
    throw new Error('The array must have three or more elements.')
  }

  return {
    x: arrv[0],
    y: arrv[1],
    z: arrv[2]
  }
}
