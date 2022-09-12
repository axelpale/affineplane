const affineplane = require('../../index')
const vec3 = affineplane.vec3

module.exports = (ts) => {
  ts.test('case: basic diff', (t) => {
    t.almostEqual(
      vec3.difference(
        { x: 0, y: 0, z: 0 },
        { x: 0, y: 0, z: 0 }
      ),
      { x: 0, y: 0, z: 0 },
      'zero vectors'
    )

    t.almostEqual(
      vec3.subtract(
        { x: 1, y: 0, z: -1 },
        { x: 2, y: 1, z: 0 }
      ),
      { x: -1, y: -1, z: -1 },
      'simple diff a - b'
    )

    t.almostEqual(
      vec3.diff(
        { x: 1, y: 2, z: 2 },
        { x: 2, y: 1, z: 0 }
      ),
      { x: -1, y: 1, z: 2 }
    )

    t.end()
  })
}
