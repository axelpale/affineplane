module.exports = (q) => {
  // @affineplane.quat4.conjugate(q)
  //
  // Get the conjugate of a quaternion.
  //
  // Parameters:
  //   q
  //     a quat4
  //
  // Return
  //   a quat4
  //
  return {
    a: q.a,
    b: -q.b,
    c: -q.c,
    d: -q.d
  }
}
