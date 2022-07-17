module.exports = function (tr, ts) {
  // affineplane.tran2.transform(tr, ts)
  //
  // Multiply transformation matrix tr from
  // the left with the given transformation matrix ts.
  // In other words, transform the image of tr by ts.
  //
  // For multiplication from right, see compose.
  //
  // Parameters:
  //   tr
  //     a tran2
  //   ts
  //     a tran2
  //
  // Return
  //   a tran2
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
