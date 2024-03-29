module.exports = (a, b, x, y) => {
  // @affineplane.helm2.create(a, b, x, y)
  //
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
  //   a helm2, a transform object
  //
  return { a, b, x, y }
}
