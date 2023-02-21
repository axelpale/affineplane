const affineplane = require('../../index')
const scalar3 = affineplane.scalar3

module.exports = (ts) => {
  ts.test('case: smoke', (t) => {
    t.ok(
      scalar3.almostEqual(2, 2),
      'zero diff'
    )
    t.notOk(
      scalar3.almostEqual(-1, 1),
      'different numbers'
    )

    t.end()
  })
}
