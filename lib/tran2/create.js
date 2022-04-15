module.exports = function (a, b, x, y) {
  // Create a 2D non-reflective similarity transform object.
  //
  // Parameters
  //   a
  //     number. The diagonal of linear transformation.
  //   b
  //     number. The upper and lower triangle of lin. transf.
  //   x
  //     number. The translation towards x
  //   y
  //     number. The translation towards y
  //
  // Return
  //   tran2, a transform object
  //
  return {
    a: a,
    b: b,
    x: x,
    y: y
  }
}
