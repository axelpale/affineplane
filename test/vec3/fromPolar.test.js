const vec3 = require('../../lib/vec3')
const PI = Math.PI

module.exports = (ts) => {
  ts.test('case: basic polar coords', (t) => {
    t.almostEqual(
      vec3.fromPolar(2, PI / 2, 1),
      { x: 0, y: 2, z: 1 }
    )

    t.end()
  })

  ts.test('case: unset depth', (t) => {
    t.almostEqual(
      vec3.fromPolar(2, PI / 2),
      { x: 0, y: 2, z: 0 }
    )

    t.end()
  })
}
