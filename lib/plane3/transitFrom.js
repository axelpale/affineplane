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
  //     on the reference plane.
  //
  // Return:
  //   a plane3, represented on the reference plane.
  //

  // Matrix multiplication matrix(pr) * matrix(tr)
  return {
    a: source.a * plane.a - source.b * plane.b,
    b: source.b * plane.a + source.a * plane.b,
    x: source.a * plane.x - source.b * plane.y + source.x,
    y: source.b * plane.x + source.a * plane.y + source.y,
    z: source.z + plane.z
  }
}
