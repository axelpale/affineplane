module.exports = (pr, lin) => {
  // affineplane.proj2.linear2(pr, lin)
  //
  // Project a linear transformation from a plane to another.
  // Use to represent the linear transformation on another plane.
  //
  // Parameters:
  //   pr
  //     a proj2, projection between planes
  //   lin
  //     a linear2, linear transformation, represented on the source plane.
  //
  // Return:
  //   a linear2, the same transformation represented on the target plane
  //
  return {
    a: pr.a * lin.a - pr.b * lin.b,
    b: pr.b * lin.a + pr.a * lin.b
  }
}
