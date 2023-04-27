const affineplane = require('../../index')
const vec4 = affineplane.vec4

module.exports = (ts) => {
  ts.test('case: almost equal vector', (t) => {
    t.ok(
      vec4.almostEqual({ x: 0, y: 0, z: 0, w: 0 }, { x: 0, y: 0, z: 0, w: 0 }),
      'zero vector'
    )
    t.ok(
      vec4.almostEqual(
        { x: 1, y: 2, z: 3, w: 4 },
        { x: 1, y: 2, z: 3, w: 4, v: 5 }
      ),
      'allow additional properties'
    )
    t.notOk(
      vec4.almostEqual({ x: 0, y: 0, z: 0, w: 0 }, { x: 0, y: 0, z: 0, w: 1 }),
      'different vectors'
    )

    t.end()
  })
}
