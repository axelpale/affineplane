const affineplane = require('../../index')
const vec2 = affineplane.vec2

module.exports = (ts) => {
  ts.test('case: vector negation', (t) => {
    t.almostEqual(
      vec2.invert({ x: 0, y: 0 }),
      { x: 0, y: 0 },
      'invert zero vector'
    )

    t.almostEqual(
      vec2.negate({ x: 1, y: -1 }),
      { x: -1, y: 1 },
      'negate ones'
    )

    t.end()
  })
}
