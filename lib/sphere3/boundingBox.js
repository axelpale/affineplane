module.exports = (sphere) => {
  // @affineplane.sphere3.boundingBox(sphere)
  //
  // Get outer cuboid boundary of the given sphere.
  //
  // Parameters
  //   sphere
  //     a sphere3, in the reference basis.
  //
  // Return
  //   a box3, in the reference basis.
  //

  const r = sphere.r
  const bx = sphere.x - r
  const by = sphere.y - r
  const bz = sphere.z - r
  const dia = r + r

  // Construct the bounding rect.
  return { a: 1, b: 0, x: bx, y: by, z: bz, w: dia, h: dia, d: dia }
}
