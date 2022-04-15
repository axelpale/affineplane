module.exports = (a, b, x, y) => {
  // Create a projection between two-dimensional planes: source and target.
  //
  // Parameters
  //   a
  //     a number. The diagonal of linear transformation.
  //   b
  //     a number. The upper and lower triangle of lin. transf.
  //   x
  //     a number. Position of the source's (0,0) on the target.
  //   y
  //     a number. Position of the sources's (0,0) on the target.
  //
  // Return
  //   a proj2, a projection object
  //
  return {
    a: a,
    b: b,
    x: x,
    y: y
  }
}
