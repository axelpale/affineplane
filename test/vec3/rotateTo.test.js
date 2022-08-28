const vec3 = require('../../lib/vec3')
const PI = Math.PI

module.exports = (ts) => {
  ts.test('case: basic rotation', (t) => {
    const v = { x: 3, y: 4, z: 0 }
    t.almostEqual(
      vec3.rotateTo(v, PI / 2, PI / 2),
      { x: 0, y: 0, z: 5 }
    )

    t.end()
  })
}
