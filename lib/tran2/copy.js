module.exports = (tr) => {
  // affineplane.tran2.copy(tr)
  // affineplane.tran2.clone
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
