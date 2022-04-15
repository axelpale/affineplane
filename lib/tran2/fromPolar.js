module.exports = function (scale, rotation, tx, ty) {
  // Create a transform object by using scale magnitude,
  // rotation angle, and translation.
  //
  // Parameters:
  //   scale
  //     a number, the scaling factor
  //   rotation
  //     a number, rotation in radians from positive x axis towards pos. y axis.
  //   tx
  //     a number, translation toward pos. x
  //   ty
  //     a number, translation toward pos. y
  //
  // Return:
  //   a tran2, a transform object
  //
  // Precondition:
  //   scale must be positive
  //
  return {
    a: scale * Math.cos(rotation),
    b: scale * Math.sin(rotation),
    x: tx,
    y: ty
  }
}
