module.exports = function (tr, ts) {
  // @affineplane.helm2.compose(tr, ts)
  // @affineplane.helm2.combine
  // @affineplane.helm2.multiply
  //
  // Multiply transformation matrix tr from
  // the right with the given transformation matrix ts.
  // In other words, transform the image of ts by tr.
  //
  // Parameters:
  //   tr
  //     a helm2
  //   ts
  //     a helm2
  //
  // Return:
  //   a helm2
  //

  // For reading aid:
  //   a -b  x    a -b  x
  //   b  a  y *  b  a  y
  //   0  0  1    0  0  1
  //
  return {
    a: tr.a * ts.a - tr.b * ts.b,
    b: tr.a * ts.b + tr.b * ts.a,
    x: tr.a * ts.x - tr.b * ts.y + tr.x,
    y: tr.b * ts.x + tr.a * ts.y + tr.y
  }
}
