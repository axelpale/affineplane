module.exports = function (tr, p) {
  // affineplane.helm2.translateTo(tr, p)
  //
  // Modify the transformation so that the result maps { x: 0, y: 0 }
  // to the given point.
  //
  // Parameters
  //   tr
  //     a helm2, a transform
  //   p
  //     a point2, a point { x, y }
  //
  // Return
  //   a helm2, a transform
  //
  return {
    a: tr.a,
    b: tr.b,
    x: p.x,
    y: p.y
  }
}
