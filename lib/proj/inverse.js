module.exports = (p) => {
  // Invert the projection. A projection from plane P to plane Q
  // becomes a projection from plane Q to plane P.
  //
  // Parameters
  //   tr
  //     tran4
  //
  // Return
  //   tran4
  //     inversed transform
  //

  // See note 2015-10-27 at 2015-10-26-16-30 for analysis
  // Test if singular transformation. These might occur when all the range
  // points are the same, forcing the scale to drop to zero.
  const det = p.a * p.a + p.b * p.b
  if (Math.abs(det) < exports.EPSILON) {
    throw new Error('Singular transformations cannot be inversed.')
  }

  return {
    a: p.a / det,
    b: -p.b / det,
    x: (-p.a * p.x - p.b * p.y) / det,
    y: (p.b * p.x - p.a * p.y) / det
  }
}
