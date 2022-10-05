module.exports = (tr) => {
  // affineplane.helm3.det(tr)
  // affineplane.helm3.determinant(tr)
  //
  // The matrix determinant of the transformation.
  // If the determinant equals zero then the matrix cannot be inverted and
  // thus is not a valid transformation.
  // In practice, determinants close to zero are also
  // problematic due to floating point arithmetics.
  //
  // Parameters
  //   tr
  //     a helm3
  //
  // Return
  //   a number, the determinant.
  //

  // Derivation with block-upper-triangular matrices.
  //      a -b  0  x     A  B
  // T =  b  a  0  y  =
  //      0  0  m  z     0  D
  //      0  0  0  1
  // where m = scale = sqrt(a*a+b*b)
  //
  // It is well known that in this situation:
  //   det(T) = det(A)det(D)
  // Also, we know that determinant of triangular matrix is product of its
  // diagonal elements.
  //   det(D) = m * 1
  // Compute
  //   det(A) = a*a + b*b = m*m
  // thus
  //   det(T) = m*m*m
  //
  const m = Math.sqrt(tr.a * tr.a + tr.b * tr.b)
  return m * m * m
}
