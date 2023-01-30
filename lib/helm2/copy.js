module.exports = (tr) => {
  // @affineplane.helm2.copy(tr)
  // @affineplane.helm2.clone
  //
  // Parameters
  //   tr
  //     a helm2, a transform
  //
  // Return
  //   a helm2, a transform
  //
  return {
    a: tr.a,
    b: tr.b,
    x: tr.x,
    y: tr.y
  }
}
