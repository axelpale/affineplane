module.exports = function (tr) {
  // Get the similarity transformation matrix
  // in the format common to other APIs, including:
  // - WebKitCSSMatrix alias DOMMatrix
  // - kld-affine
  // - MDN documentation in some parts
  //
  // Parameters:
  //   tr
  //     a tran2
  //
  // Return:
  //   object o, having properties a, b, c, d, e, f:
  //   [ tr.a -tr.b  tr.x ]   [ o.a  o.c  o.e ]
  //   [ tr.b  tr.a  tr.y ] = [ o.b  o.d  o.f ]
  //   [ 0     0     1    ]   [  -    -    -  ]
  //
  return {
    a: tr.a,
    b: tr.b,
    c: -tr.b,
    d: tr.a,
    e: tr.x,
    f: tr.y
  }
}
