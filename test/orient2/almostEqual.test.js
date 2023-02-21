const affineplane = require('../../index')
const orient2 = affineplane.orient2

module.exports = (ts) => {
  ts.test('case: strict equivalence', (t) => {
    t.ok(
      orient2.almostEqual({ a: 0, b: 1 }, { a: 0, b: 1 }),
      'should be equal'
    )
    t.notOk(
      orient2.almostEqual({ a: 0, b: 0 }, { a: 0, b: 1 }),
      'should not be equal in b'
    )
    t.notOk(
      orient2.almostEqual({ a: 1, b: 0 }, { a: 0, b: 0 }),
      'should not be equal in a'
    )

    t.end()
  })

  ts.test('case: tolerance', (t) => {
    t.ok(
      orient2.almostEqual({ a: 0, b: 1 }, { a: 0, b: 0 }, 1),
      'within tolerance'
    )
    t.notOk(
      orient2.almostEqual({ a: 1, b: 0 }, { a: 0, b: 0 }, 0.5),
      'over tolerance'
    )

    t.end()
  })
}
