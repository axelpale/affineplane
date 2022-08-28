module.exports = (p, q) => {
  // affineplane.point2.difference(p, q)
  // affineplane.point2.delta
  //
  // A vector from point p to point q.
  //
  // Parameters:
  //   p
  //     a point2
  //   q
  //     a point2
  //
  // Return
  //   a vec2
  //
  return {
    x: q.x - p.x,
    y: q.y - p.y
  }
}
