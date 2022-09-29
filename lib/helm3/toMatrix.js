module.exports = function (tr) {
  // affineplane.helm3.toMatrix(tr)
  //
  // Get the transformation as a 4x4 homogeneous 3D transformation matrix,
  // using indexing similar to MDN matrix3d article.
  //
  // Parameters:
  //   tr
  //     a helm3
  //
  // Return:
  //   an object with properties:
  //     { a1, a2, a3, a4,
  //     ..b1, b2, b3, b4,
  //     ..c1, c2, c3, c4
  //     ..d1, d2, d3, d4 }
  //
  // Elements are constructed like this:
  // ```
  // ┌                      ┐   ┌             ┐
  // │ tr.a -tr.b  0   tr.x │   │ a1 a2 a3 a4 │
  // │ tr.b  tr.a  0   tr.y │ = │ b1 b2 b3 b4 │
  // │ 0     0     m   tr.z │   │ c1 c2 c3 c4 │
  // │ 0     0     0   1    │   │ d1 d2 d3 d4 │
  // └                      ┘   └             ┘
  // where m = sqrt(tr.a*tr.a + tr.b*tr.b)
  // ```
  //
  const m = Math.sqrt(tr.a * tr.a + tr.b * tr.b)
  return {
    a1: tr.a,
    a2: -tr.b,
    a3: 0,
    a4: tr.x,
    b1: tr.b,
    b2: tr.a,
    b3: 0,
    b4: tr.y,
    c1: 0,
    c2: 0,
    c3: m,
    c4: tr.z,
    d1: 0,
    d2: 0,
    d3: 0,
    d4: 1
  }
}
