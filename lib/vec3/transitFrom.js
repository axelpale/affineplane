module.exports = (vec, plane) => {
  // affineplane.vec3.transitFrom(vec, plane)
  //
  // Represent the vector on the reference plane
  // without losing information.
  // Note that plane translation does not affect vectors.
  //
  // Parameters:
  //   vec
  //     a vec3 on the source plane.
  //   plane
  //     a plane3 on the reference plane.
  //    .. The source plane.
  //
  // Return:
  //   a vec3, represented on the reference plane.
  //

  // The plane is a mapping from itself to the reference plane.
  return {
    x: plane.a * vec.x - plane.b * vec.y,
    y: plane.b * vec.x + plane.a * vec.y,
    z: vec.z
  }
}
