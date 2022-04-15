module.exports = function (p, tr) {
  // Transform a point.
  //
  // Parameters
  //   p
  //     point2, { x, y }
  //   tr
  //     tran2
  //
  // Return
  //   point2, the transformed point
  //
  return {
    x: tr.a * p.x - tr.b * p.y + tr.x,
    y: tr.b * p.x + tr.a * p.y + tr.y
  }
}
