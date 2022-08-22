const affineplane = require('../../index')
const vec2 = affineplane.vec2

module.exports = (ts) => {
  ts.test('case: basic scaling', (t) => {
    t.almostEqual(
      vec2.scaleBy({ x: 0, y: 0 }, 2),
      { x: 0, y: 0 },
      'zero vector remains zero'
    )

    t.almostEqual(
      vec2.scaleBy({ x: 1, y: -1 }, 2),
      { x: 2, y: -2 },
      'elements are multiplied'
    )

    t.almostEqual(
      vec2.scaleBy({ x: 1, y: -1 }, -1),
      { x: -1, y: 1 },
      'negative multiplier'
    )

    t.almostEqual(
      vec2.scaleBy({ x: 1, y: -1 }, 0),
      { x: 0, y: 0 },
      'zero multiplier'
    )

    t.end()
  })
}
