const affineplane = require('../../index')
const scalar1 = affineplane.scalar1

module.exports = (ts) => {
  ts.test('case: strict equivalence', (t) => {
    t.ok(
      scalar1.almostEqual(0, 0),
      'zero diff'
    )
    t.ok(
      scalar1.almostEqual(2, 2),
      'positive numbers'
    )
    t.notOk(
      scalar1.almostEqual(-1, 1),
      'different numbers'
    )

    t.end()
  })

  ts.test('case: allow difference', (t) => {
    let tolerance

    tolerance = 0
    t.ok(
      scalar1.almostEqual(0, 0, tolerance),
      'zero tolerance'
    )

    tolerance = 1
    t.ok(
      scalar1.almostEqual(0, 0.5, tolerance),
      'below tolerance'
    )
    t.ok(
      scalar1.almostEqual(0, 1, tolerance),
      'at tolerance'
    )
    t.notOk(
      scalar1.almostEqual(0, 1.5, tolerance),
      'over tolerance'
    )

    t.end()
  })
}
