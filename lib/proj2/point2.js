module.exports = (pr, p2) => {
  // Project point2 from plane to another.
  // Unlike vector2, point2 is affected by translation.
  //
  // Parameters:
  //   pr
  //     proj2
  //   p
  //     point2
  //
  // Return
  //   point2
  //
  return {
    x: pr.a * p2.x - pr.b * p2.y + pr.x,
    y: pr.b * p2.x + pr.a * p2.y + pr.y
  }
}
