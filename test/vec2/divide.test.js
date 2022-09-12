const affineplane = require('../../index')
const vec2 = affineplane.vec2

module.exports = (ts) => {
  ts.test('case: basic division', (t) => {
    t.almostEqual(
      vec2.divide({ x: 0, y: 0 }, 2),
      { x: 0, y: 0 },
      'zero vector remains zero'
    )

    t.almostEqual(
      vec2.divide({ x: 2, y: -2 }, 2),
      { x: 1, y: -1 },
      'elements are divided'
    )

    t.almostEqual(
      vec2.divide({ x: 1, y: -1 }, -1),
      { x: -1, y: 1 },
      'negative divisor'
    )

    t.throws(() => {
      vec2.divide({ x: 1, y: -1 }, 0)
    }, /zero/i, 'zero divisor')

    t.end()
  })
}
