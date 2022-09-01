const affineplane = require('../../index')
const vec3 = affineplane.vec3

module.exports = (ts) => {
  ts.test('case: zeroes and ones', (t) => {
    t.deepEqual(
      vec3.cross(
        { x: 0, y: 0, z: 0 },
        { x: 0, y: 0, z: 0 }
      ),
      { x: 0, y: 0, z: 0 },
      'zero vectors'
    )

    t.deepEqual(
      vec3.cross(
        { x: 1, y: 1, z: 1 },
        { x: 1, y: 1, z: 1 }
      ),
      { x: 0, y: 0, z: 0 },
      'parallel vectors'
    )

    t.deepEqual(
      vec3.cross(
        { x: 1, y: 0, z: 0 },
        { x: 0, y: 1, z: 0 }
      ),
      { x: 0, y: 0, z: 1 },
      'orthogonal'
    )

    t.end()
  })
}
