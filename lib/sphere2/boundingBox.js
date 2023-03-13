module.exports = (sphere) => {
  // @affineplane.sphere2.boundingBox(sphere)
  //
  // Get outer rectangular boundary of the given sphere.
  //
  // Parameters
  //   sphere
  //     a sphere2, in the reference basis.
  //
  // Return
  //   a box2, in the reference basis.
  //

  const r = sphere.r
  const bx = sphere.x - r
  const by = sphere.y - r
  const dia = r + r

  // Construct the bounding rect.
  return { a: 1, b: 0, x: bx, y: by, w: dia, h: dia }
}
