const affineplane = require('../../index')
const scalar1 = affineplane.scalar1

module.exports = (ts) => {
  ts.test('case: basic scalar equality', (t) => {
    t.ok(
      scalar1.equal(1, 1),
      'numbers equal'
    )

    t.notOk(
      scalar1.equal(0, 1),
      'numbers not equal'
    )

    t.end()
  })
}
