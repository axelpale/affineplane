const affineplane = require('../../index')
const vec2 = affineplane.vec2

module.exports = (ts) => {
  ts.test('case: basic transformation', (t) => {
    t.almostEqual(
      vec2.transformBy({ x: 0, y: 0 }, { a: 1, b: 2, x: 3, y: 4 }),
      { x: 0, y: 0 },
      'zero vector remains zero'
    )

    const rot90 = { a: 0, b: 1, x: 0, y: 0 }
    t.almostEqual(
      vec2.transformBy({ x: 1, y: -1 }, rot90),
      { x: 1, y: 1 },
      'vector is rotated'
    )

    const rot90tran = { a: 0, b: 1, x: 5, y: 5 }
    t.almostEqual(
      vec2.transformBy({ x: 1, y: -1 }, rot90tran),
      { x: 1, y: 1 },
      'translation does not affect'
    )

    const singular = { a: 0, b: 0, x: 0, y: 0 }
    t.almostEqual(
      vec2.transformBy({ x: 1, y: -1 }, singular),
      { x: 0, y: 0 },
      'singular transform results zero vector'
    )

    t.end()
  })
}
