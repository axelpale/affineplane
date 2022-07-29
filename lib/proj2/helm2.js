module.exports = (pr, tr) => {
  // affineplane.proj2.helm2(pr, tr)
  //
  // Transforms are quite similar to projections but they
  // happen on the plane, and thus are automorphisms.
  //
  // Parameters:
  //   pr
  //     a proj2, projection to be applied
  //   tr
  //     a helm2, an affine similarity transformation
  //
  // Return
  //   a helm2, the same transformation on the target plane.
  //

  // Matrix multiplication matrix(pr) * matrix(tr)
  return {
    a: pr.a * tr.a - pr.b * tr.b,
    b: pr.b * tr.a + pr.a * tr.b,
    x: pr.a * tr.x - pr.b * tr.y + pr.x,
    y: pr.b * tr.x + pr.a * tr.y + pr.y
  }
}
