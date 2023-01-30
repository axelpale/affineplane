module.exports = function (plane, p) {
  // @affineplane.plane2.translateTo(plane, p)
  //
  // Move the plane origin to a new point.
  // This translates the plane to a new position.
  //
  // Parameters
  //   plane
  //     a plane2 on the reference plane
  //   p
  //     a point2 on the reference plane
  //
  // Return
  //   a plane2
  //
  return {
    a: plane.a,
    b: plane.b,
    x: p.x,
    y: p.y
  }
}
