const affineplane = require('../../index')
const dist2 = affineplane.dist2

module.exports = (ts) => {
  ts.test('case: basic distance equality', (t) => {
    t.ok(
      dist2.equal(1, 1),
      'numbers equal'
    )

    t.notOk(
      dist2.equal(0, 1),
      'numbers not equal'
    )

    t.end()
  })
}
