module.exports = function (tr) {
  // affineplane.tran2.toArray(tr)
  //
  // Return an array representation of the transformation.
  // Compatible with affineplane.tran2.fromArray.
  //
  // Parameters:
  //   tr
  //     a tran2
  //
  // Return
  //   an array, [a, b, x, y]
  //
  return [tr.a, tr.b, tr.x, tr.y]
}
