module.exports = (plane, source) => {
  // @affineplane.plane2.transitFrom(plane, source)
  //
  // Transit a plane2 from the source plane
  // to the reference plane. In other words,
  // represent the plane in the coordinate system
  // of the reference plane instead of the source plane.
  //
  // Parameters:
  //   plane
  //     a plane2 on the source plane.
  //   source
  //     a plane2, the source plane, represented
  //     .. on the reference plane.
  //
  // Return:
  //   a plane2, represented on the reference plane.
  //

  // Matrix multiplication matrix(source) * matrix(plane)
  return {
    a: source.a * plane.a - source.b * plane.b,
    b: source.b * plane.a + source.a * plane.b,
    x: source.a * plane.x - source.b * plane.y + source.x,
    y: source.b * plane.x + source.a * plane.y + source.y
  }
}
