module.exports = function (plane, vec) {
  // @affineplane.plane3.translateBy(plane, vec)
  //
  // Translate the plane by a vector.
  // Basically this moves the plane origin
  // on the reference plane by the given vector.
  //
  // Parameters
  //   plane
  //     a plane3 in the reference space.
  //   vec
  //     a vec2 or vec3 in the reference space.
  //
  // Return
  //   a plane3 in the reference space.
  //
  return {
    a: plane.a,
    b: plane.b,
    x: plane.x + vec.x,
    y: plane.y + vec.y,
    z: plane.z + (vec.z ? vec.z : 0)
  }
}
