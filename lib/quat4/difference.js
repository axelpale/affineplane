module.exports = (q, p) => {
  // @affineplane.quat4.difference(q, p)
  // @affineplane.quat4.diff
  //
  // Get the quaternion q - p.
  //
  // Parameters:
  //   q
  //     a quat4
  //   p
  //     a quat4
  //
  // Return
  //   a quat4
  //
  return {
    a: p.a - q.a,
    b: p.b - q.b,
    c: p.c - q.c,
    d: p.d - q.d
  }
}
