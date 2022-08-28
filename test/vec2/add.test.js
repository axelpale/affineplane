const affineplane = require('../../index')
const vec2 = affineplane.vec2

module.exports = (ts) => {
  ts.test('case: zeroes and ones', (t) => {
    t.deepEqual(
      vec2.add(
        { x: 0, y: 0 },
        { x: 0, y: 0 }
      ),
      {
        x: 0,
        y: 0
      }
    )

    t.deepEqual(
      vec2.add(
        { x: 1, y: 1 },
        { x: 1, y: 1 }
      ),
      {
        x: 2,
        y: 2
      }
    )

    t.end()
  })
}
