const transform = require('./transform')

module.exports = function (ps, tr) {
  // @affineplane.point2.transformMany(ps, tr)
  //
  // Transform an array of points.
  //
  // Parameters
  //   ps
  //     an array, of point2
  //   tr
  //     a helm2, a transform
  //
  // Return
  //   an array of point2, each point transformed by tr.
  //

  // We generally avoid dynamic type checking but here
  // it is too easy to confuse mapPoint and mapPoints,
  // and especially because the bad use would only
  // yield a vague { x: NaN, y: NaN } without error.
  if (!Array.isArray(ps)) {
    const type = typeof ps
    const msg = 'Expected an array but saw ' + type + ' instead.'
    throw TypeError(msg)
  }

  const c = []
  for (let i = 0; i < ps.length; i += 1) {
    c.push(transform(ps[i], tr))
  }

  return c
}
