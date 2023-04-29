module.exports = (origin, span) => {
  // @affineplane.ray3.create(origin, span)
  //
  // Create a ray object from origin point and a spanning vector.
  //
  // Parameters
  //   origin
  //     a point3, the ray starting point.
  //   span
  //     a dir3 or vec3, the ray direction and unit length along the ray.
  //
  // Return
  //   a ray3
  //
  return {
    x: origin.x,
    y: origin.y,
    z: origin.z,
    dx: span.x,
    dy: span.y,
    dz: span.z
  }
}
