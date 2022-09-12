const affineplane = require('../../index')
const vec2 = affineplane.vec2

module.exports = (ts) => {
  ts.test('case: basic elem-wise min', (t) => {
    t.almostEqual(
      vec2.min(
        { x: 4, y: 2 },
        { x: -3, y: -1 }
      ),
      { x: -3, y: -1 },
      'absolute magnitude should not matter'
    )

    t.almostEqual(
      vec2.min(
        { x: 2, y: -2 },
        { x: -2, y: 2 }
      ),
      { x: -2, y: -2 },
      'mixed'
    )

    t.end()
  })
}
