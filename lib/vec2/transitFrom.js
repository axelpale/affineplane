module.exports = (vec, plane) => {
  // @affineplane.vec2.transitFrom(vec, plane)
  //
  // Transit a vec2 from the source plane
  // to the reference plane.
  // Translation of the plane does not affect the vector
  // only scaling and rotation do.
  //
  // Parameters:
  //   vec
  //     a vec2 on the source plane.
  //   plane
  //     a plane2, the source plane, represented
  //     .. on the reference plane.
  //
  // Return:
  //   a vec2, represented on the target plane.
  //
  return {
    x: plane.a * vec.x - plane.b * vec.y,
    y: plane.b * vec.x + plane.a * vec.y
  }
}
