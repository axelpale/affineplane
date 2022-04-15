module.exports = function (tr) {
  // Return the scale multiplier of the transformation.
  //
  // Parameters:
  //   tr
  //     a tran2
  //
  // Return:
  //   a number, the scale multiplier.
  //
  return Math.sqrt(tr.b * tr.b + tr.a * tr.a)
}
