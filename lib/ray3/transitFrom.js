module.exports = (ray, basis) => {
  // @affineplane.ray3.transitFrom(ray, basis)
  //
  // Represent the ray in the reference basis without losing information.
  //
  // Parameters:
  //   ray
  //     a ray3, represented in the given basis.
  //   basis
  //     a plane3, represented in the reference basis.
  //
  // Return:
  //   a ray3, represented in the reference basis.
  //

  // The basis is a mapping from itself to the reference basis.
  const ba = basis.a
  const bb = basis.b
  const bm = Math.sqrt(ba * ba + bb * bb)

  return {
    x: ba * ray.x - bb * ray.y + basis.x,
    y: bb * ray.x + ba * ray.y + basis.y,
    z: bm * ray.z + basis.z,
    dx: ba * ray.dx - bb * ray.dy,
    dy: bb * ray.dx + ba * ray.dy,
    dz: bm * ray.dz
  }
}
