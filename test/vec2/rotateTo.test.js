const affineplane = require('../../index')
const vec2 = affineplane.vec2

module.exports = (ts) => {
  ts.test('case: zero vector rotations', (t) => {
    t.almostEqual(
      vec2.rotateTo({ x: 0, y: 0 }, Math.PI),
      { x: 0, y: 0 },
      'zero vector stays zero'
    )

    t.almostEqual(
      vec2.rotateTo({ x: 0, y: 0 }, 0),
      { x: 0, y: 0 },
      'zero vector stays zero'
    )

    t.end()
  })

  ts.test('case: rotate unit vector', (t) => {
    t.almostEqual(
      vec2.rotateTo({ x: 1, y: 0 }, Math.PI),
      { x: -1, y: 0 }
    )

    t.almostEqual(
      vec2.rotateTo({ x: 0, y: 1 }, Math.PI),
      { x: -1, y: 0 }
    )

    t.almostEqual(
      vec2.rotateTo({ x: 3, y: 4 }, Math.PI / 2),
      { x: 0, y: 5 }
    )

    t.end()
  })
}
