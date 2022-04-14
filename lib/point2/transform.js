module.exports = function (p, tr) {
  // Transform a point
  //
  // Parameters
  //   p
  //     a point { x, y }
  //   tr
  //     a transfrom
  //
  // Return
  //   the transformed point
  //
  return {
    x: tr.a * p.x - tr.b * p.y + tr.x,
    y: tr.b * p.x + tr.a * p.y + tr.y
  }
}
