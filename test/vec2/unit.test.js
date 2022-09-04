const affineplane = require('../../index')
const vec2 = affineplane.vec2

module.exports = (ts) => {
  ts.test('case: basic unit vector', (t) => {
    t.almostEqual(
      vec2.unit({ x: 0, y: 0 }),
      { x: 1, y: 0 },
      'zero vector towards x'
    )

    t.almostEqual(
      vec2.unit({ x: 3, y: 4 }), // orig.len. 5
      { x: 3 / 5, y: 4 / 5 },
      'direction does not change'
    )

    t.end()
  })
}
