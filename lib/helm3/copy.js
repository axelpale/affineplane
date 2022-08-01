module.exports = (tr) => {
  // affineplane.helm3.copy(tr)
  // affineplane.helm3.clone
  //
  // Parameters
  //   tr
  //     a helm3, a transform
  //
  // Return
  //   a helm3, a transform
  //
  return {
    a: tr.a,
    b: tr.b,
    x: tr.x,
    y: tr.y,
    z: tr.z
  }
}
