module.exports = (sp) => {
  // @affineplane.sphere3.area(sp)
  //
  // Get surface area of the sphere.
  //
  // Parameters:
  //   a sphere3
  //
  // Return
  //   a scalar2, a number. The area.
  //
  return sp.r * sp.r * Math.PI * 4
}
