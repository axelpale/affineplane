module.exports = (p, q) => {
  // affineplane.ortho3.compose(p, q)
  // affineplane.ortho3.combine(p, q)
  //
  // Combine two projections.
  //
  // Parameters:
  //   p
  //     a ortho3, projection to be applied last
  //   q
  //     a ortho3, projection to be applied first
  //
  // Return
  //   a ortho3
  //
  return {
    a: p.a * q.a - p.b * q.b,
    b: p.b * q.a + p.a * q.b,
    x: p.a * q.x - p.b * q.y + p.x,
    y: p.b * q.x + p.a * q.y + p.y,
    z: p.z + q.z
  }
}
