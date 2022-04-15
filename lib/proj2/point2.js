module.exports = (pr, p2) => {
  // Project a point2
  //
  // Parameters:
  //   pr
  //     projection between planes
  //   p2
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
