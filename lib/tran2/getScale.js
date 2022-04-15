module.exports = function (tr) {
  // Get the scale component of the transformation.
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
