module.exports = function (tr, p) {
  // Modify transformation so that it maps { x: 0, y: 0 }
  // to the given point.
  //
  // Parameters
  //   tr
  //     tran2, a transform
  //   p
  //     point2, a point { x, y }
  //
  // Return
  //   tran2, a transform
  //
  return {
    a: tr.a,
    b: tr.b,
    x: p.x,
    y: p.y
  }
}
