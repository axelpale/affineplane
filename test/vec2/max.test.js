const affineplane = require('../../index')
const vec2 = affineplane.vec2

module.exports = (ts) => {
  ts.test('case: basic elem-wise max', (t) => {
    t.almostEqual(
      vec2.max(
        { x: 2, y: 0 },
        { x: -3, y: -1 }
      ),
      { x: 2, y: 0 },
      'absolute magnitude should not matter'
    )

    t.almostEqual(
      vec2.max(
        { x: 2, y: -2 },
        { x: -2, y: 2 }
      ),
      { x: 2, y: 2 },
      'mixed'
    )

    t.end()
  })
}
