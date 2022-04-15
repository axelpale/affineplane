module.exports = (p, q) => {
  // Distance between two points.
  //
  // Parameters
  //   p
  //     a point2
  //   q
  //     a point2
  //
  // Return
  //   a number, a distance from p to q (= distance from q to p)
  //
  const dx = p.x - q.x
  const dy = p.y - q.y

  return Math.sqrt(dx * dx + dy * dy)
}
