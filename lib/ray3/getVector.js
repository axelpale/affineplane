module.exports = (r) => {
  // @affineplane.ray3.getVector(r)
  //
  // Get the spanning vector of the ray.
  //
  // Parameters
  //   r
  //     a ray3
  //
  // Return
  //   a vec3
  //
  return {
    x: r.dx,
    y: r.dy,
    z: r.dz
  }
}
