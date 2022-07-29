module.exports = (p, q) => {
  // affineplane.point3.difference(p, q)
  //
  // A vector from point p to point q.
  //
  // Parameters:
  //   p
  //     a point3
  //   q
  //     a point3
  //
  // Return
  //   a vec3
  //
  return {
    x: q.x - p.x,
    y: q.y - p.y,
    z: q.z - p.z
  }
}
