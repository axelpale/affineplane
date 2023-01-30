module.exports = function (tr, ts) {
  // @affineplane.helm2.equal(tr, ts)
  // @affineplane.helm2.equals
  //
  // Are transforms exactly equal?
  // Note that due to floating-point arithmetics, computation
  // might cause exact equality to be broken.
  // See affineplane.helm2.almostEqual for relaxed alternative.
  //
  // Parameters:
  //   tr
  //     a helm2, a transform
  //   ts
  //     a helm2, a transform
  //
  // Return:
  //   a boolean
  //
  return (tr.a === ts.a && tr.b === ts.b &&
    tr.x === ts.x && tr.y === ts.y)
}
