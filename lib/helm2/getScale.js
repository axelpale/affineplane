module.exports = function (tr) {
  // affineplane.helm2.getScale(tr)
  //
  // Get the scale component of the transformation.
  //
  // Parameters:
  //   tr
  //     a helm2
  //
  // Return:
  //   a number, the scale multiplier.
  //
  return Math.sqrt(tr.b * tr.b + tr.a * tr.a)
}
