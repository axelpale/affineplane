module.exports = (s, p) => {
  // @affineplane.sphere2.equal(s, p)
  //
  // Test if two spheres are strictly equal in radius and position.
  // See affineplane.sphere2.almostEqual for loose comparison.
  //
  // Parameters
  //   s
  //     a sphere2
  //   p
  //     a sphere2
  //
  // Return
  //   a boolean
  //
  return s.x === p.x && s.y === p.y && s.r === p.r
}
