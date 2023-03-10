const alpha = 4 * Math.PI / 3

module.exports = (sp) => {
  // @affineplane.sphere3.volume(sp)
  //
  // Get volume of the sphere.
  //
  // Parameters:
  //   a sphere3
  //
  // Return
  //   a scalar3, a number. The volume.
  //
  return alpha * sp.r * sp.r * sp.r
}
