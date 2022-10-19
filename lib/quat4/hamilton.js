module.exports = (q, p) => {
  // affineplane.quat4.hamilton(q, p)
  // affineplane.quat4.multiply
  //
  // The Hamilton product of two quaternions.
  //
  // Parameters
  //   q
  //     a quat4
  //   p
  //     a quat4
  //
  // Return
  //   a quat4
  //
  return {
    a: q.a * p.a - q.b * p.b - q.c * p.c - q.d * p.d,
    b: q.a * p.b + q.b * p.a + q.c * p.d - q.d * p.c,
    c: q.a * p.c - q.b * p.d + q.c * p.a + q.d * p.b,
    d: q.a * p.d + q.b * p.c - q.c * p.b + q.d * p.a
  }
}
