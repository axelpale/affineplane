module.exports = (ray, c) => {
  // @affineplane.ray3.at(line, c)
  //
  // Get a point on the ray at position c from the ray origin.
  // For example, c=2 gives a point two ray spans away from the origin.
  // Negative positions default to the ray origin.
  //
  // Parameters:
  //   ray
  //     a ray3
  //   c
  //     a number
  //
  // Return:
  //   a point3
  //
  if (c <= 0) {
    return {
      x: ray.x,
      y: ray.y,
      z: ray.z
    }
  }
  return {
    x: ray.x + c * ray.dx,
    y: ray.y + c * ray.dy,
    z: ray.z + c * ray.dz
  }
}
