module.exports = (q, p) => {
  // affineplane.quat4.add(q, p)
  //
  // Add two quaternions together via component-wise addition.
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
    a: q.a + p.a,
    b: q.b + p.b,
    c: q.c + p.c,
    d: q.d + p.d
  }
}
