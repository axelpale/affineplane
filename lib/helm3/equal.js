module.exports = function (tr, ts) {
  // @affineplane.helm3.equal(tr, ts)
  // @affineplane.helm3.equals
  //
  // True if transformations are exactly equal.
  // Note that due to floating-point arithmetics, computation
  // might cause exact equality to be broken.
  // See affineplane.helm3.almostEqual for a relaxed alternative.
  //
  // Parameters:
  //   tr
  //     a helm3, a transform
  //   ts
  //     a helm3, a transform
  //
  // Return:
  //   a boolean
  //
  if (!tr || !ts) {
    return false
  }
  if (typeof tr !== 'object' || typeof ts !== 'object') {
    return false
  }

  return (tr.a === ts.a && tr.b === ts.b &&
    tr.x === ts.x && tr.y === ts.y && tr.z === ts.z)
}
