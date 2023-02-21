const affineplane = require('../../index')
const scalar2 = affineplane.scalar2

module.exports = (ts) => {
  ts.test('case: smoke', (t) => {
    t.ok(
      scalar2.almostEqual(2, 2),
      'zero diff'
    )
    t.notOk(
      scalar2.almostEqual(-1, 1),
      'different numbers'
    )

    t.end()
  })
}
