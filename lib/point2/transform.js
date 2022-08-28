module.exports = function (p, tr) {
  // affineplane.point2.transform(p, tr)
  //
  // Transform a point.
  //
  // Parameters
  //   p
  //     a point2
  //   tr
  //     a helm2, a transform
  //
  // Return
  //   a point2, the transformed point
  //
  return {
    x: tr.a * p.x - tr.b * p.y + tr.x,
    y: tr.b * p.x + tr.a * p.y + tr.y
  }
}
