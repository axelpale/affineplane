module.exports = (pr) => {
  // Invert the projection. A projection from plane P to plane Q
  // becomes a projection from plane Q to plane P.
  //
  // Parameters
  //   pr
  //     a proj2
  //
  // Return
  //   a proj2, inversed projection
  //

  // See note 2015-10-27 at 2015-10-26-16-30 for analysis
  // Test if singular transformation. These might occur when all the range
  // points are the same, forcing the scale to drop to zero.
  const det = pr.a * pr.a + pr.b * pr.b
  if (Math.abs(det) < exports.EPSILON) {
    throw new Error('Singular transformations cannot be inversed.')
  }

  return {
    a: pr.a / det,
    b: -pr.b / det,
    x: (-pr.a * pr.x - pr.b * pr.y) / det,
    y: (pr.b * pr.x - pr.a * pr.y) / det
  }
}
