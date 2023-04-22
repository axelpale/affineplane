module.exports = (c) => {
  // @affineplane.circle3.size(c)
  //
  // Get the cuboid size of a circle. Circles always have zero depth.
  //
  // Parameters:
  //   c
  //     a circle3 in the reference basis.
  //
  // Return
  //   a size3 in the reference basis.
  //
  const diam = c.r + c.r
  return {
    w: diam,
    h: diam,
    d: 0
  }
}
