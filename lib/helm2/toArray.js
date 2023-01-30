module.exports = function (tr) {
  // @affineplane.helm2.toArray(tr)
  //
  // Return an array representation of the transformation.
  // Compatible with affineplane.helm2.fromArray.
  //
  // Parameters:
  //   tr
  //     a helm2
  //
  // Return
  //   an array, [a, b, x, y]
  //
  return [tr.a, tr.b, tr.x, tr.y]
}
