const affineplane = require('../../index')
const vec2 = affineplane.vec2

module.exports = (ts) => {
  ts.test('case: zeroes and ones', (t) => {
    t.equal(
      vec2.dot(
        { x: 0, y: 0 },
        { x: 0, y: 0 }
      ),
      0
    )

    t.equal(
      vec2.dot(
        { x: 1, y: 1 },
        { x: 1, y: 1 }
      ),
      2
    )

    t.end()
  })
}
