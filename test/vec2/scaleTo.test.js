const affineplane = require('../../index')
const vec2 = affineplane.vec2

module.exports = (ts) => {
  ts.test('case: basic scaling', (t) => {
    t.almostEqual(
      vec2.scaleTo({ x: 0, y: 0 }, 2),
      { x: 0, y: 0 },
      'zero vector cannot be scaled to length'
    )

    t.almostEqual(
      vec2.scaleTo({ x: 4, y: -3 }, 10), // orig.len. 5
      { x: 8, y: -6 },
      'direction does not change'
    )

    t.almostEqual(
      vec2.scaleTo({ x: 1, y: -1 }, 0),
      { x: 0, y: 0 },
      'zero length produces zero vector'
    )

    t.end()
  })
}
