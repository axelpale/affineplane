module.exports = function (tr) {
  // Return the scale multiplier of the transformation.
  //
  // Parameters:
  //   tr
  //     tran2
  //
  // Return:
  //   number, the scale multiplier.
  //
  return Math.sqrt(tr.b * tr.b + tr.a * tr.a)
}
