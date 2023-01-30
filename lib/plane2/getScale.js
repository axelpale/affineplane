module.exports = (plane) => {
  // @affineplane.plane2.getScale(plane)
  //
  // The length of the vector.
  //
  // Parameters
  //   plane
  //     a plane2 on the reference plane
  //
  // Return
  //   a number, the scale multiplier with respect to
  //   .. the reference plane.
  //
  return Math.sqrt(plane.a * plane.a + plane.b * plane.b)
}
