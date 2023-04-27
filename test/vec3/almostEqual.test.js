const affineplane = require('../../index')
const vec3 = affineplane.vec3

module.exports = (ts) => {
  ts.test('case: almost equal vector', (t) => {
    t.ok(
      vec3.almostEqual({ x: 0, y: 0, z: 0 }, { x: 0, y: 0, z: 0 }),
      'zero vector'
    )
    t.ok(
      vec3.almostEqual({ x: 1, y: 2, z: 3 }, { x: 1, y: 2, z: 3, w: 4 }),
      'allow additional properties'
    )
    t.notOk(
      vec3.almostEqual({ x: 0, y: 0, z: 0 }, { x: 0, y: 0, z: 1 }),
      'different vectors'
    )

    t.end()
  })
}
