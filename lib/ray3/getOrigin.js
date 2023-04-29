module.exports = (r) => {
  // @affineplane.ray3.getOrigin(r)
  //
  // Get the origin point of the ray. Note that you can also use the ray
  // object itself as a point.
  //
  // Parameters
  //   r
  //     a ray3
  //
  // Return
  //   a point3
  //
  return {
    x: r.x,
    y: r.y,
    z: r.z
  }
}
