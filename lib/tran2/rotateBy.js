module.exports = function (tr, center, radians) {
  // Rotate image of the transform by the given radians
  // so that the given center point stays fixed.
  //
  // Parameter
  //   tr
  //     a tran2, a transform
  //   center
  //     a point2, a point on the image of the transform
  //   radians
  //     a number, angle in radians
  //
  // Return
  //   a tran2, a transform
  //
  const co = Math.cos(radians)
  const si = Math.sin(radians)

  const cx = center.x
  const cy = center.y

  const ahat = tr.a * co - tr.b * si
  const bhat = tr.a * si + tr.b * co
  const xhat = (tr.x - cx) * co - (tr.y - cy) * si + cx
  const yhat = (tr.x - cx) * si + (tr.y - cy) * co + cy

  return {
    a: ahat,
    b: bhat,
    x: xhat,
    y: yhat
  }
}
