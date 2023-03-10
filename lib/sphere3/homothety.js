module.exports = (sphere, origin, ratio) => {
  // @affineplane.sphere3.homothety(sphere, origin, ratio)
  // @affineplane.sphere3.scaleBy
  //
  // Perform homothety for the sphere about a pivot.
  // In other words, scale the sphere by the given ratio,
  // so that the pivot point stays fixed.
  //
  // Parameters:
  //   sphere
  //     a sphere3
  //   origin
  //     a point3, the transform origin, the pivot point
  //   ratio
  //     a number, the scaling ratio
  //
  // Return:
  //   a sphere3
  //
  return {
    x: (sphere.x - origin.x) * ratio + origin.x,
    y: (sphere.y - origin.y) * ratio + origin.y,
    z: (sphere.z - origin.z) * ratio + origin.z,
    r: sphere.r * ratio
  }
}
