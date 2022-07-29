module.exports = (arrp) => {
  // affineplane.point3.fromArray(arrp)
  //
  // Create a point3 from array [x, y, z]
  //
  // Parameters:
  //   arrp
  //     a three-element array
  //
  // Return
  //   a point3
  //
  return {
    x: arrp[0],
    y: arrp[1],
    z: arrp[2]
  }
}
