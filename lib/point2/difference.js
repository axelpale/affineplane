module.exports = (p, q) => {
  // affineplane.point2.difference(p, q)
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
  //   a vector2
  //
  return {
    x: p.x - q.x,
    y: p.y - q.y
  }
}
