module.exports = function (tr, p) {
  // affineplane.helm2.translateTo(tr, p)
  //
  // Modify the transformation so that
  // the resulting transformation maps
  // { x: 0, y: 0, z: 0 } to the given
  // point.
  //
  // Parameters
  //   tr
  //     a helm3, a transform
  //   p
  //     a point2 or point3
  //
  // Return
  //   a helm3
  //
  return {
    a: tr.a,
    b: tr.b,
    x: p.x,
    y: p.y,
    z: (p.z ? p.z : 0)
  }
}
