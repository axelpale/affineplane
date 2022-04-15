module.exports = (pr, lin2) => {
  // Project a linear transformation from plane to another.
  // Use to represent the linear transformation on another plane.
  //
  // Parameters:
  //   pr
  //     a proj2, projection between planes
  //   lin2
  //     a linear2, linear transformation, represented on the source plane.
  //
  // Return:
  //   a linear2, the same transformation represented on the target plane
  //
  return {
    a: pr.a * lin2.a - pr.b * lin2.b,
    b: pr.b * lin2.a + pr.a * lin2.b
  }
}
