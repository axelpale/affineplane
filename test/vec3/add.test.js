const affineplane = require('../../index')
const vec3 = affineplane.vec3

module.exports = (ts) => {
  ts.test('case: zeroes and ones', (t) => {
    t.deepEqual(
      vec3.add(
        { x: 0, y: 0, z: 0 },
        { x: 0, y: 0, z: 0 }
      ),
      { x: 0, y: 0, z: 0 },
      'zeroes'
    )

    t.deepEqual(
      vec3.add(
        { x: 1, y: 1, z: 1 },
        { x: 1, y: 1, z: 1 }
      ),
      { x: 2, y: 2, z: 2 },
      'ones'
    )

    t.end()
  })
}
