module.exports = (arrp) => {
  // Create { x, y, z, r } from array [x, y, z, r]
  //
  // Parameters:
  //   arrp
  //     array
  //
  // Return:
  //   vector3r
  //
  return {
    x: arrp[0],
    y: arrp[1],
    z: arrp[2],
    r: arrp[3]
  }
}
