const affineplane = require('../../index')
const vector = affineplane.vector

module.exports = (ts) => {
  ts.test('case: strict equivalence', (t) => {
    t.ok(
      vector.almostEqual({ x: 0, y: 0 }, { x: 0, y: 0 }),
      'zero vector'
    )
    t.ok(
      vector.almostEqual({ x: 1, y: 2 }, { x: 1, y: 2 }),
      'positive vector'
    )
    t.notOk(
      vector.almostEqual({ x: 0, y: 0 }, { x: 0, y: 1 }),
      'different vectors'
    )

    t.end()
  })

  ts.test('case: allow small difference', (t) => {
    t.ok(
      vector.almostEqual({ x: 1, y: 1 - affineplane.EPSILON / 2 }, { x: 1, y: 1 }),
      'half epsilon difference'
    )
    t.notOk(
      vector.almostEqual({ x: 1, y: 1 - affineplane.EPSILON * 2 }, { x: 1, y: 1 }),
      'double epsilon difference'
    )

    t.end()
  })
}
