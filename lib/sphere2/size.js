module.exports = (sphere) => {
  // @affineplane.sphere2.size(sphere)
  //
  // Get the rectangular size of the circle.
  //
  // Parameters:
  //   sphere
  //     a sphere2 in the reference basis.
  //
  // Return
  //   a size2 in the reference basis.
  //
  const diam = sphere.r + sphere.r
  return {
    w: diam,
    h: diam
  }
}
