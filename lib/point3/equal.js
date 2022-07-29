module.exports = (p, q) => {
  // affineplane.point3.equal(p, q)
  //
  // Test if points p, q are equal in value.
  //
  // Parameters
  //   p
  //     a point3
  //   q
  //     a point3
  //
  // Return
  //   a boolean, true if equal
  //
  return p.x === q.x && p.y === q.y && p.z === q.z
}
