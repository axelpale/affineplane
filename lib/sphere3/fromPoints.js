module.exports = (p, q) => {
  // @affineplane.sphere3.fromPoints(p, q)
  //
  // Create a sphere3 from two points,
  // the origin p and the circumference point q.
  //
  // Parameters:
  //   p
  //     a point3, at the circle center.
  //   q
  //     a point3, on the circle circumference.
  //
  // Return
  //   a sphere3
  //
  const dx = q.x - p.x
  const dy = q.y - p.y
  const dz = q.z - p.z
  return {
    x: p.x,
    y: p.y,
    z: p.z,
    r: Math.sqrt(dx * dx + dy * dy + dz * dz)
  }
}
