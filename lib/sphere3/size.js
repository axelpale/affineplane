module.exports = (sphere) => {
  // @affineplane.sphere3.size(sphere)
  //
  // Get the cuboid size of the sphere.
  //
  // Parameters:
  //   sphere
  //     a sphere3 in the reference basis.
  //
  // Return
  //   a size3 in the reference basis.
  //
  const diam = sphere.r + sphere.r
  return {
    w: diam,
    h: diam,
    d: diam
  }
}
