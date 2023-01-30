const affineplane = require('../../index')
const dist2 = affineplane.dist2

module.exports = (ts) => {
  ts.test('case: strict equivalence', (t) => {
    t.ok(
      dist2.almostEqual(0, 0),
      'zero diff'
    )
    t.ok(
      dist2.almostEqual(2, 2),
      'positive vector'
    )
    t.notOk(
      dist2.almostEqual(-1, 1),
      'different vectors'
    )

    t.end()
  })

  ts.test('case: allow difference', (t) => {
    let tolerance

    tolerance = 0
    t.ok(
      dist2.almostEqual(0, 0, tolerance),
      'zero tolerance'
    )

    tolerance = 1
    t.ok(
      dist2.almostEqual(0, 0.5, tolerance),
      'below tolerance'
    )
    t.ok(
      dist2.almostEqual(0, 1, tolerance),
      'at tolerance'
    )
    t.notOk(
      dist2.almostEqual(0, 1.5, tolerance),
      'over tolerance'
    )

    t.end()
  })
}
