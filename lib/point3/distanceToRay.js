const epsilon = require('../epsilon')

module.exports = (p, ray) => {
  // @affineplane.point3.distanceToRay(p, ray)
  //
  // Compute the smallest euclidean distance between a point and a ray.
  // For half of the space, the closest point on the ray is the ray origin
  // and therefore, for points inside that half, the computation reduces
  // to the euclidean distance to the ray origin.
  // See also affineplane.point3.distanceToLine.
  //
  // Parameters
  //   p
  //     a point3
  //   ray
  //     a ray3
  //
  // Return
  //   a number, a scalar1, a dist3, a distance
  //

  // See distanceToLine for math derivation.

  // Extract the ray spanning vector
  const xs = ray.dx
  const ys = ray.dy
  const zs = ray.dz
  // Get vector va from ray origin to the given point.
  const xa = p.x - ray.x
  const ya = p.y - ray.y
  const za = p.z - ray.z
  // Get va's magnitude squared
  const ma2 = xa * xa + ya * ya + za * za
  // Project va to the line to get vector vb and get its magnitude squared.
  const adots = xa * xs + ya * ys + za * zs
  // Determine if the point is on or behind the ray origin plane
  if (adots <= 0) {
    // Reduce to euclidean distance to the ray origin.
    return Math.sqrt(ma2)
  }
  const sdots = xs * xs + ys * ys + zs * zs
  let mb2
  if (sdots < epsilon) {
    // The line has zero span.
    // Assume vectors perpendicular, thus vb has zero magnitude.
    mb2 = 0
  } else {
    mb2 = adots * adots / sdots
  }
  // Apply pythagoras to find the distance
  return Math.sqrt(ma2 - mb2)
}
