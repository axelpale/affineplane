const EPSILON = require('../epsilon')

module.exports = function (tr, ts, epsilon) {
  // @affineplane.helm3.almostEqual(tr, ts[, epsilon])
  // @affineplane.helm3.almostEquals
  //
  // Are two transforms almost equal? Return true if a matrix norm
  // of the difference is smaller than epsilon. We use modified
  // [L1 norm](https://mathworld.wolfram.com/L1-Norm.html) aka
  // Manhattan Distance to compute the difference.
  //
  // Parameters:
  //   tr
  //     a helm3, a transform
  //   ts
  //     a helm3, a transform
  //   epsilon
  //     optional number, default to affineplane.epsilon.
  //     .. Set to 0 for strict comparison.
  //
  // Return:
  //   a boolean, true if equal
  //

  if (typeof epsilon !== 'number') {
    epsilon = EPSILON
  }

  const da = Math.abs(tr.a - ts.a)
  const db = Math.abs(tr.b - ts.b)
  const dx = Math.abs(tr.x - ts.x)
  const dy = Math.abs(tr.y - ts.y)
  const dz = Math.abs(tr.z - ts.z)

  // smaller-or-equal instead of smaller-than to include epsilon=0.
  return da + db + dx + dy + dz <= epsilon
}
