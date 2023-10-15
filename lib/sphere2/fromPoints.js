module.exports = (p, q) => {
  // @affineplane.sphere2.fromPoints(p, q)
  //
  // Create a sphere2 from two points,
  // the origin p and the circumference point q.
  //
  // Parameters:
  //   p
  //     a point2, at the circle center.
  //   q
  //     a point2, on the circle circumference.
  //
  // Return
  //   a sphere2
  //
  const dx = q.x - p.x
  const dy = q.y - p.y
  return {
    x: p.x,
    y: p.y,
    r: Math.sqrt(dx * dx + dy * dy)
  }
}
