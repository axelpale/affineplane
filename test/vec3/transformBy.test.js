const affineplane = require('../../index')
const vec3 = affineplane.vec3

module.exports = (ts) => {
  ts.test('case: basic transformation', (t) => {
    t.almostEqual(
      vec3.transformBy({ x: 0, y: 0, z: 0 }, { a: 1, b: 2, x: 3, y: 4, z: 5 }),
      { x: 0, y: 0, z: 0 },
      'zero vector remains zero'
    )

    const rot90 = { a: 0, b: 1, x: 0, y: 0, z: 0 }
    t.almostEqual(
      vec3.transformBy({ x: 1, y: -1, z: -2 }, rot90),
      { x: 1, y: 1, z: -2 },
      'vector is rotated around z-axis'
    )

    const rot90tran = { a: 0, b: 1, x: 5, y: 5, z: 5 }
    t.almostEqual(
      vec3.transformBy({ x: 1, y: -1, z: -2 }, rot90tran),
      { x: 1, y: 1, z: -2 },
      'translation does not affect'
    )

    const singular = { a: 0, b: 0, x: 5, y: 5, z: 5 }
    t.almostEqual(
      vec3.transformBy({ x: 1, y: -1, z: -2 }, singular),
      { x: 0, y: 0, z: 0 },
      'singular transform results zero components, translation does not affect'
    )

    t.end()
  })
}
