module.exports = (c, d) => {
  // @affineplane.sphere3.equal(c, d)
  //
  // Test if two spheres are strictly equal in size and position.
  // See affineplane.sphere3.almostEqual for loose comparison.
  //
  // Parameters
  //   c
  //     a sphere3
  //   d
  //     a sphere3
  //
  // Return
  //   a boolean
  //
  return c.x === d.x && c.y === d.y && c.z === d.z && c.r === d.r
}
