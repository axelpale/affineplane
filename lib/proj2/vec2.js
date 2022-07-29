module.exports = (pr, v2) => {
  // affineplane.proj2.vec2(pr, v2)
  //
  // Project a vec2 from a plane to another.
  // Translations do not affect vectors,
  // only scaling and rotation do.
  //
  // Parameters:
  //   pr
  //     a proj2, projection between planes
  //   v2
  //     a vec2, a translation on a plane,
  //     ..represented on the source plane.
  //
  // Return:
  //   a vec2, the same vector represented on the target plane,
  //
  return {
    x: pr.a * v2.x - pr.b * v2.y,
    y: pr.b * v2.x + pr.a * v2.y
  }
}
