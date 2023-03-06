module.exports = (sphere, origin, ratio) => {
  // @affineplane.sphere2.homothety(sphere, origin, ratio)
  // @affineplane.sphere2.scaleBy
  //
  // Perform homothety for the sphere about a pivot.
  // In other words, scale the sphere by the given ratio,
  // so that the pivot point stays fixed.
  //
  // Parameters:
  //   sphere
  //     a sphere2
  //   origin
  //     a point2, the transform origin, the pivot point
  //   ratio
  //     a number, the scaling ratio
  //
  // Return:
  //   a sphere2
  //
  return {
    x: (sphere.x - origin.x) * ratio + origin.x,
    y: (sphere.y - origin.y) * ratio + origin.y,
    r: sphere.r * ratio
  }
}
