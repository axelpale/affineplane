module.exports = function (plane, vec) {
  // affineplane.plane2.translateBy(plane, vec)
  //
  // Translate the plane by a vector.
  // Basically this moves the plane origin
  // on the reference plane.
  //
  // Parameters
  //   plane
  //     a plane2 on the reference plane.
  //   vec
  //     a vec2, the translation vector.
  //     Represented on the reference plane.
  //
  // Return
  //   a plane2 on the reference plane.
  //
  return {
    a: plane.a,
    b: plane.b,
    x: plane.x + vec.x,
    y: plane.y + vec.y
  }
}
