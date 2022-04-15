module.exports = (p, q) => {
  // Combine two projections.
  //
  // Parameters:
  //   p
  //     a proj2, projection to be applied last
  //   q
  //     a proj2, projection to be applied first
  //
  // Return
  //   a proj2
  //
  return {
    a: p.a * q.a - p.b * q.b,
    b: p.b * q.a + p.a * q.b,
    x: p.a * q.x - p.b * q.y + p.x,
    y: p.b * q.x + p.a * q.y + p.y
  }
}
