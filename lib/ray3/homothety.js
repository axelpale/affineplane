const EPSILON = require('../epsilon')

module.exports = (ray, origin, ratio) => {
  // @affineplane.ray3.homothety(ray, origin, ratio)
  //
  // Perform a homothety about the origin for the ray.
  //
  // Parameters:
  //   ray
  //     a ray3
  //   origin
  //     a point3
  //   ratio
  //     a number, the scaling ratio
  //
  // Return:
  //   a ray3
  //

  const dx = (ray.x - origin.x)
  const dy = (ray.y - origin.y)
  const dz = (ray.z - origin.z)

  // If the ray origin does not move, then the span should not scale.
  if (dx * dx + dy * dy + dz * dz < EPSILON) {
    return ray
  }

  return {
    x: origin.x + dx * ratio,
    y: origin.y + dy * ratio,
    z: origin.z + dz * ratio,
    dx: ray.dx * ratio,
    dy: ray.dy * ratio,
    dz: ray.dz * ratio
  }
}
