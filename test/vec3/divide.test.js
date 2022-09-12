const affineplane = require('../../index')
const vec3 = affineplane.vec3

module.exports = (ts) => {
  ts.test('case: basic division', (t) => {
    t.almostEqual(
      vec3.divide({ x: 0, y: 0, z: 0 }, 2),
      { x: 0, y: 0, z: 0 },
      'zero vector remains zero'
    )

    t.almostEqual(
      vec3.divide({ x: 2, y: -2, z: 2 }, 2),
      { x: 1, y: -1, z: 1 },
      'elements are divided'
    )

    t.almostEqual(
      vec3.divide({ x: 1, y: -1, z: 1 }, -1),
      { x: -1, y: 1, z: -1 },
      'negative divisor'
    )

    t.throws(() => {
      vec3.divide({ x: 1, y: -1, z: 1 }, 0)
    }, /zero/i, 'zero divisor')

    t.end()
  })
}
