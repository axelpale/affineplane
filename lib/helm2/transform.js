module.exports = function (tr, ts) {
  // @affineplane.helm2.transform(tr, ts)
  //
  // Multiply transformation matrix tr from
  // the left with the given transformation matrix ts.
  // In other words, transform the image of tr by ts.
  //
  // For multiplication from right, see affineplane.helm2.compose.
  //
  // Parameters:
  //   tr
  //     a helm2
  //   ts
  //     a helm2
  //
  // Return
  //   a helm2
  //

  // For reading aid:
  //   a -b  x    a -b  x
  //   b  a  y *  b  a  y
  //   0  0  1    0  0  1
  //
  return {
    a: ts.a * tr.a - ts.b * tr.b,
    b: ts.a * tr.b + ts.b * tr.a,
    x: ts.a * tr.x - ts.b * tr.y + ts.x,
    y: ts.b * tr.x + ts.a * tr.y + ts.y
  }
}
