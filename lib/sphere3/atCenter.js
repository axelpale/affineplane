module.exports = (sp) => {
  // @affineplane.sphere3.atCenter(sp)
  //
  // Get the center point of the sphere.
  // Note that the sphere3 object itself can act as a point3 in many cases.
  //
  // Parameters:
  //   a sphere3
  //
  // Return
  //   a point3
  //
  return {
    x: sp.x,
    y: sp.y,
    z: sp.z
  }
}
