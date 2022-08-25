module.exports = function (tr) {
  // affineplane.helm2.getDilation(tr)
  // affineplane.helm2.getScale
  //
  // Get the dilation component of the transformation.
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
