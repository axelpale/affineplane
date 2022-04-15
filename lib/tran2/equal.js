module.exports = function (tr, ts) {
  // Are transforms exactly equal?
  // Note that due to floating-point arithmetics, computation
  // might cause exact equality to be broken.
  // See tran2.almostEqual for relaxed alternative.
  //
  // Parameters:
  //   tr
  //     tran2, a transform
  //   ts
  //     tran2, a transform
  //
  // Return:
  //   boolean
  //
  return (tr.a === ts.a && tr.b === ts.b &&
    tr.x === ts.x && tr.y === ts.y)
}
