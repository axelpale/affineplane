module.exports = function (scale, rotation, tx, ty) {
  // affineplane.helm2.fromPolar(scale, rotation[, tx[, ty]])
  //
  // Create a transform object by using scale magnitude,
  // rotation angle, and translation.
  //
  // Parameters:
  //   scale
  //     a number, the scaling factor
  //   rotation
  //     a number, rotation in radians from positive x-axis towards pos. y-axis.
  //   tx
  //     optional number, translation toward positive x. Default 0.
  //   ty
  //     optional number, translation toward positive y. Default 0.
  //
  // Return:
  //   a helm2, a transform object
  //
  // Precondition:
  //   scale must be positive
  //

  // Default args
  if (!tx) { tx = 0 }
  if (!ty) { ty = 0 }

  return {
    a: scale * Math.cos(rotation),
    b: scale * Math.sin(rotation),
    x: tx,
    y: ty
  }
}
