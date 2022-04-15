module.exports = function (tr) {
  // Return an array representation of the transformation.
  // Compatible with tran2.createFromArray(...)
  //
  // Parameters:
  //   tr
  //     tran2
  //
  // Return
  //   array, [a, b, x, y]
  //
  return [tr.a, tr.b, tr.x, tr.y]
}
