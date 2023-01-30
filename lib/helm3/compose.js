module.exports = function (tr, ts) {
  // @affineplane.helm3.compose(tr, ts)
  // @affineplane.helm3.combine
  //
  // Multiply the helm3 matrix tr from
  // the right with the helm3 matrix ts.
  // In other words, transform the image of ts by tr.
  //
  // Parameters:
  //   tr
  //     a helm3
  //   ts
  //     a helm3
  //
  // Return:
  //   a helm3
  //

  // For reading aid:
  //   a -b  0  x     s -r  0  i     as-br -ar-bs 0  ai-bj+x
  //   b  a  0  y  *  r  s  0  j  =  bs+ar -br+as 0  bi+aj+y
  //   0  0  n  z     0  0  m  k     0     0      nm nk+z
  //   0  0  0  1     0  0  0  1     0     0      0  1
  // where n = sqrt(a*a+b*b), m = sqrt(s*s+r*r)
  //
  const trm = Math.sqrt(tr.a * tr.a + tr.b * tr.b)
  return {
    a: tr.a * ts.a - tr.b * ts.b,
    b: tr.a * ts.b + tr.b * ts.a,
    x: tr.a * ts.x - tr.b * ts.y + tr.x,
    y: tr.b * ts.x + tr.a * ts.y + tr.y,
    z: trm * ts.z + tr.z
  }
}
