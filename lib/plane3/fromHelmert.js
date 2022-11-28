module.exports = function (tr, origin) {
  // affineplane.plane3.fromHelmert(tr, origin)
  //
  // Create a plane by applying a transformation to an identity plane
  // at the given transform origin. For example, you can create
  // a plane that has been scaled about a point (100, 100, 100).
  // The choice of transform origin does not affect scale or rotation
  // of the created plane but does affect its translative component.
  // Note that any rotation is performed around such a line that is
  // parallel to z-axis and goes through the given origin point.
  //
  // Parameters:
  //   tr
  //     a helm2z on the reference plane
  //   origin
  //     a point3 on the reference plane.
  //
  // Return
  //   a plane3 on the reference plane
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
  //   1  0  0  ox   a -b  0  tx   1  0  0 -ox
  //   0  1  0  oy * b  a  0  ty * 0  1  0 -oy
  //   0  0  1  oz   0  0  m  tz   0  0  1 -oz
  //   0  0  0  1    0  0  0  1    0  0  0  1
  // where m is the dilation, i.e. the magnitude of vector (a, b).
  //
  // Let us compute the matrix result:
  //   1  0  0  ox   a -b  0 -a*ox+b*oy+tx   a -b  0 -a*ox+b*oy+tx+ox
  // = 0  1  0  oy * b  a  0 -b*ox-a*oy+ty = b  a  0 -b*ox-a*oy+ty+oy
  //   0  0  1  oz   0  0  m -m*oz+tz        0  0  m -m*oz+tz+oz
  //   0  0  0  1    0  0  0  1              0  0  0  1
  //

  const a = tr.a
  const b = tr.b
  const m = Math.sqrt(a * a + b * b)
  const ox = origin.x
  const oy = origin.y
  const oz = (origin.z ? origin.z : 0)

  return {
    a,
    b,
    x: -a * ox + b * oy + tr.x + ox,
    y: -b * ox - a * oy + tr.y + oy,
    z: -m * oz + tr.z + oz
  }
}
