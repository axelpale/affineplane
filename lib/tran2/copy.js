module.exports = (tr) => {
  // affineplane.helm2.copy(tr)
  //
  // Parameters
  //   tr
  //     a tran2, a transform
  //
  // Return
  //   a tran2, a transform
  //
  return {
    a: tr.a,
    b: tr.b,
    x: tr.x,
    y: tr.y
  }
}
