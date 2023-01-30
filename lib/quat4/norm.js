module.exports = (q) => {
  // @affineplane.quat4.norm(q)
  //
  // The length of quaternion. Also called the norm.
  //
  // Parameters:
  //   q
  //     a quat4
  //
  // Return
  //   a number
  //
  return Math.sqrt(q.a * q.a + q.b * q.b + q.c * q.c + q.d * q.d)
}
