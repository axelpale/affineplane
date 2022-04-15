module.exports = function (p, tr) {
  // Transform a point.
  //
  // Parameters
  //   p
  //     a point2, { x, y }
  //   tr
  //     a tran2, a transform
  //
  // Return
  //   a point2, the transformed point
  //
  return {
    x: tr.a * p.x - tr.b * p.y + tr.x,
    y: tr.b * p.x + tr.a * p.y + tr.y
  }
}
