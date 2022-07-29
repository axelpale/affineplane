module.exports = (arrp) => {
  // Create { x, y, z, r } from array [x, y, z, r]
  //
  // Parameters:
  //   arrp
  //     an array [x,y,z,r]
  //
  // Return:
  //   a rigid3
  //
  return {
    x: arrp[0],
    y: arrp[1],
    z: arrp[2],
    r: arrp[3]
  }
}
