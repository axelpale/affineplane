const affineplane = require('../../index')
const vec2 = affineplane.vec2

module.exports = (ts) => {
  ts.test('case: zeroes and ones', (t) => {
    t.ok(
      vec2.equal(
        { x: 0, y: 0 },
        { x: 0, y: 0 }
      ),
      'zero vectors equal'
    )

    t.notOk(
      vec2.equal(
        { x: 1, y: 1 },
        { x: 2, y: 1 }
      ),
      'vectors different'
    )

    t.end()
  })
}
