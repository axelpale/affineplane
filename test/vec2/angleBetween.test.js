const affineplane = require('../../index')
const vec2 = affineplane.vec2

module.exports = (ts) => {
  ts.test('case: basic angleBetween', (t) => {
    t.almostEqual(
      vec2.angleBetween(
        { x: 0, y: 0 },
        { x: 0, y: 0 }
      ),
      0,
      'angle diff between zero vectors'
    )

    t.almostEqual(
      vec2.angleBetween(
        { x: 0, y: 0 },
        { x: 1, y: 1 }
      ),
      0,
      'angle diff with a zero vector'
    )

    t.almostEqual(
      vec2.angleBetween(
        { x: 1, y: 0 },
        { x: 0, y: 1 }
      ),
      Math.PI / 2,
      'right angle'
    )

    t.almostEqual(
      vec2.angleBetween(
        { x: 0, y: 1 },
        { x: 1, y: 0 }
      ),
      Math.PI / 2,
      'vector order does not matter'
    )

    t.almostEqual(
      vec2.angleBetween(
        { x: 1, y: 0 },
        { x: -1, y: 0 }
      ),
      Math.PI,
      'full 180 deg angle for opposites'
    )

    t.end()
  })
}
