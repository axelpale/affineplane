module.exports = (plane, source) => {
  // affineplane.plane3.transitFrom(plane, source)
  //
  // Transit a plane3 from the source plane
  // to the reference plane. In other words,
  // represent the same plane in the coordinate
  // system of the reference plane.
  //
  // Parameters:
  //   plane
  //     a plane3, represented on the source plane.
  //   source
  //     a plane3, the source plane, represented
  //     .. on the reference plane.
  //
  // Return:
  //   a plane3, represented on the reference plane.
  //

  // Matrix multiplication matrix(pr) * matrix(tr)
  const sa = source.a
  const sb = source.b
  // Enforce uniform scaling
  const sm = Math.sqrt(sa * sa + sb * sb)
  return {
    a: sa * plane.a - sb * plane.b,
    b: sb * plane.a + sa * plane.b,
    x: sa * plane.x - sb * plane.y + source.x,
    y: sb * plane.x + sa * plane.y + source.y,
    z: sm * plane.z + source.z
  }
}
