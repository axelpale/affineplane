module.exports = (p, q) => {
  // @affineplane.orient2.equal(p, q)
  //
  // Test if two orientations are strictly equal in value.
  //
  // Parameters
  //   p
  //     an orient2
  //   q
  //     an orient2
  //
  // Return
  //   a boolean
  //
  return p.a === q.a && p.b === q.b
}
