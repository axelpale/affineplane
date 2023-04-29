module.exports = (ray, dx, dy, dz) => {
  // @affineplane.ray3.offset(ray, dx, dy, dz)
  //
  // Offset a ray origin by scalars dx, dy, dz.
  //
  // Parameters:
  //   ray
  //     a ray3
  //   dx
  //     a number, the offset along x-axis
  //   dy
  //     a number, the offset along y-axis
  //   dz
  //     a number, the offset along z-axis
  //
  // Return
  //   a ray3
  //
  return {
    x: ray.x + dx,
    y: ray.y + dy,
    z: ray.z + dz,
    dx: ray.dx,
    dy: ray.dy,
    dz: ray.dz
  }
}
