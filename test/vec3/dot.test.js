const affineplane = require('../../index')
const vec3 = affineplane.vec3

module.exports = (ts) => {
  ts.test('case: zeroes and ones', (t) => {
    t.equal(
      vec3.dot(
        { x: 0, y: 0, z: 0 },
        { x: 0, y: 0, z: 0 }
      ),
      0
    )

    t.equal(
      vec3.dot(
        { x: 1, y: 1, z: 1 },
        { x: 1, y: 1, z: 1 }
      ),
      3
    )

    t.end()
  })
}
