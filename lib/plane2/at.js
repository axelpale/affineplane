module.exports = (plane, x, y) => {
  // @affineplane.plane2.at(plane, x, y)
  //
  // Take a point on the plane and transit it to the reference basis.
  //
  // Parameters
  //   plane
  //     a plane2, in the reference basis.
  //   x
  //     a number, the horizontal coordinate on the plane
  //   y
  //     a number, the vertical coordinate on the plane
  //
  // Return
  //   a point2 in the reference basis.
  //
  return {
    x: plane.a * x - plane.b * y + plane.x,
    y: plane.b * x + plane.a * y + plane.y
  }
}
