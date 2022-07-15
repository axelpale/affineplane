module.exports = (p, q) => {
  // affineplane.point2.equal(p, q)
  //
  // Test if points p, q are equal.
  //
  // Parameters
  //   p
  //     a point2
  //   q
  //     a point2
  //
  // Return
  //   a boolean
  //
  return p.x === q.x && p.y === q.y
}
