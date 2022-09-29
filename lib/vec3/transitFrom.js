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
  const pa = plane.a
  const pb = plane.b
  const pm = Math.sqrt(pa * pa + pb * pb)
  return {
    x: pa * vec.x - pb * vec.y,
    y: pb * vec.x + pa * vec.y,
    z: pm * vec.z
  }
}
