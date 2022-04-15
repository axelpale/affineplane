module.exports = function (tr) {
  // Return an array representation of the transformation.
  //
  // Compatible with transform.createFromArray(...)
  //
  return [tr.a, tr.b, tr.x, tr.y]
}
