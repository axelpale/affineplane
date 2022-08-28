module.exports = function (tr, radians) {
  // affineplane.helm3.rotateBy(tr, radians)
  //
  // Rotate image of the transform by the given radians around z-axis.
  // This changes the direction of the translation but
  // preserves the scaling and rotating effects as well as
  // the translation along z.
  //
  // Parameter
  //   tr
  //     a helm3, a transform
  //   radians
  //     a number, angle in radians
  //
  // Return
  //   a helm3, a transform
  //
  const co = Math.cos(radians)
  const si = Math.sin(radians)

  const xhat = tr.x * co - tr.y * si
  const yhat = tr.x * si + tr.y * co

  return {
    a: tr.a,
    b: tr.b,
    x: xhat,
    y: yhat,
    z: tr.z
  }
}
