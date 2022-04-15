module.exports = (pr, d) => {
  // Project a one-dimensional distance.
  //
  // Parameters:
  //   pr
  //     a proj2, projection between planes
  //   d
  //     a number, a distance in two-dimensions
  //
  // Return
  //   a number, the same distance on the target plane.
  //
  const scale = Math.sqrt(pr.b * pr.b + pr.a * pr.a)
  return d * scale
}
