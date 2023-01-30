module.exports = function (plane, p) {
  // @affineplane.plane3.translateTo(plane, p)
  /// TODO alias setOrigin(plane, p)
  //
  // Move the plane origin to a new point.
  // This translates the plane to a new position.
  //
  // Parameters
  //   plane
  //     a plane3
  //   p
  //     a point2 or point3, the new origin position.
  //     If point2 is given, plane z depth is preserved in translation.
  //
  // Return
  //   a plane3
  //
  return {
    a: plane.a,
    b: plane.b,
    x: p.x,
    y: p.y,
    z: (typeof p.z === 'number' ? p.z : plane.z)
  }
}
