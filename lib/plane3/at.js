module.exports = (plane, x, y, z) => {
  // @affineplane.plane3.at(plane, x, y, z)
  //
  // Take a point relative to the plane and transit it to the reference basis.
  //
  // Parameters
  //   plane
  //     a plane3, in the reference basis.
  //   x
  //     a number, the horizontal coordinate on the plane
  //   y
  //     a number, the vertical coordinate on the plane
  //   z
  //     a number, the depth offset relative to the plane
  //
  // Return
  //   a point3 in the reference basis.
  //
  const a = plane.a
  const b = plane.b
  const m = Math.sqrt(a * a + b * b)
  return {
    x: a * x - b * y + plane.x,
    y: b * x + a * y + plane.y,
    z: m * z + plane.z
  }
}
