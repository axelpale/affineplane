module.exports = (pr, p2) => {
  // affineplane.proj2.point2(pr, p2)
  // affineplane.proj2.point
  //
  // Project a point2 from a plane to another.
  // Unlike vector2, point2 is affected by translation.
  //
  // Parameters:
  //   pr
  //     a proj2
  //   p
  //     a point2
  //
  // Return
  //   a point2
  //
  return {
    x: pr.a * p2.x - pr.b * p2.y + pr.x,
    y: pr.b * p2.x + pr.a * p2.y + pr.y
  }
}
