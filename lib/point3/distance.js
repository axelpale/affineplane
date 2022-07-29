module.exports = (p, q) => {
  // affineplane.point3.distance(p, q)
  //
  // Euclidean distance between two points.
  //
  // Parameters
  //   p
  //     a point3
  //   q
  //     a point3
  //
  // Return
  //   a number, a distance from p to q (= distance from q to p)
  //
  const dx = q.x - p.x
  const dy = q.y - p.y
  const dz = q.z - p.z

  return Math.sqrt(dx * dx + dy * dy + dz * dz)
}
