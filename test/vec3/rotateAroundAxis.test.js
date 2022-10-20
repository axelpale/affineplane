const vec3 = require('../../lib/vec3')
const PI = Math.PI

module.exports = (ts) => {
  ts.test('case: basic rotation around axis', (t) => {
    const i = { x: 1, y: 0, z: 0 }
    t.almostEqual(
      vec3.rotateAroundAxis(i, i, PI),
      i,
      'around itself, no change'
    )

    t.almostEqual(
      vec3.rotateAroundAxis(i, { x: 1, y: 1, z: 1 }, 2 * PI / 3),
      { x: 0, y: 1, z: 0 },
      'around non-trivial axis'
    )

    t.almostEqual(
      vec3.rotateAroundAxis(i, { x: -1, y: -1, z: -1 }, 4 * PI / 3),
      { x: 0, y: 1, z: 0 },
      'around negated axis'
    )

    t.end()
  })
}
