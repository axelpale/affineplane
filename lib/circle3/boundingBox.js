module.exports = (circle) => {
  // @affineplane.circle3.boundingBox(circle)
  //
  // Get outer cuboid boundary of the given circle.
  //
  // Parameters
  //   circle
  //     a circle3, in the reference basis.
  //
  // Return
  //   a box3, in the reference basis.
  //

  const r = circle.r
  const bx = circle.x - r
  const by = circle.y - r
  const bz = circle.z // flat box
  const dia = r + r

  // Construct the bounding rect.
  return { a: 1, b: 0, x: bx, y: by, z: bz, w: dia, h: dia, d: 0 }
}
