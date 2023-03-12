module.exports = (sp) => {
  // @affineplane.sphere2.atCenter(sp)
  //
  // Get the center point of the sphere.
  // Note that the sphere2 object itself can act as a point2 in many cases.
  //
  // Parameters:
  //   a sphere2
  //
  // Return
  //   a point2
  //
  return {
    x: sp.x,
    y: sp.y
  }
}
