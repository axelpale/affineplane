module.exports = (a, b, x, y) => {
  // Create a 2D non-reflective similarity transform object.
  //
  // Parameters
  //   a
  //     a number. The diagonal of linear transformation.
  //   b
  //     a number. The upper and lower triangle of lin. transf.
  //   x
  //     a number. The translation towards x
  //   y
  //     a number. The translation towards y
  //
  // Return
  //   a tran2, a transform object
  //
  return {
    a: a,
    b: b,
    x: x,
    y: y
  }
}
