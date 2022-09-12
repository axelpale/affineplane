const affineplane = require('../../index')
const vec2 = affineplane.vec2

module.exports = (ts) => {
  ts.test('case: basic diff', (t) => {
    t.almostEqual(
      vec2.difference(
        { x: 0, y: 0 },
        { x: 0, y: 0 }
      ),
      { x: 0, y: 0 },
      'zero vectors'
    )

    t.almostEqual(
      vec2.subtract(
        { x: 1, y: 0 },
        { x: 2, y: 1 }
      ),
      { x: -1, y: -1 },
      'simple diff a - b'
    )

    t.end()
  })
}
