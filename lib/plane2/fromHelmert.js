module.exports = function (tr, origin) {
  // affineplane.plane2.fromHelmert(tr, origin)
  //
  // Create a plane by transforming an identity plane about
  // the given transform origin. For example, you can create
  // a plane that has been rotated around a point (100, 100).
  // The choice of transform origin affects the translative
  // component of tr.
  //
  // Parameters:
  //   tr
  //     a helm2 on the reference plane
  //   origin
  //     a point2 on the reference plane
  //
  // Return
  //   a plane2 on the reference plane
  //

  // Consider affine transformation T = Ax + c, where
  // - A is a linear transformation
  // - x is an input vector
  // - c is a translation vector
  //
  // The transform origin works by first translating the input vector
  // to a vector relative to the origin: (x-o),
  // then performing the linear transformation (A(x-o)),
  // and finally translating the output back to the original basis (A(x-o)+o)
  // The corrected transformation becomes T_o = A(x - o) + o + c
  //
  // We can represent the corrected transformation with a single
  // affine transformation T_o = O * T * iO, where
  // - O is translation
  // - iO is its inverse
  //
  // Let us represent it with matrices:
  //   1  0  ox   a -b  tx   1  0 -ox
  //   0  1  oy * b  a  ty * 0  1 -oy
  //   0  0  1    0  0  1    0  0  1
  // And open it:
  //   1  0  ox   a -b -a*ox+b*oy+tx   a -b -a*ox+b*oy+tx+ox
  // = 0  1  oy * b  a -b*ox-a*oy+ty = b  a -b*ox-a*oy+ty+oy
  //   0  0  1    0  0  1              0  0  1
  //

  const a = tr.a
  const b = tr.b
  const ox = origin.x
  const oy = origin.y

  return {
    a,
    b,
    x: -a * ox + b * oy + tr.x + ox,
    y: -b * ox - a * oy + tr.y + oy
  }
}
