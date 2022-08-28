module.exports = function (tr, ts) {
  // affineplane.helm3.compose(tr, ts)
  // affineplane.helm3.combine
  //
  // Multiply the helm3 matrix tr from
  // the right with the helm3 matrix ts.
  // In other words, transform the image of ts by tr.
  //
  // Parameters:
  //   tr
  //     a helm3
  //   ts
  //     a helm3
  //
  // Return:
  //   a helm3
  //

  // For reading aid:
  //   a -b  0  x     a -b  0  x
  //   b  a  0  y  *  b  a  0  y
  //   0  0  1  z     0  0  1  z
  //   0  0  0  1     0  0  0  1
  //
  return {
    a: tr.a * ts.a - tr.b * ts.b,
    b: tr.a * ts.b + tr.b * ts.a,
    x: tr.a * ts.x - tr.b * ts.y + tr.x,
    y: tr.b * ts.x + tr.a * ts.y + tr.y,
    z: tr.z + ts.z
  }
}
