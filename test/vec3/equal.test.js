const affineplane = require('../../index')
const vec3 = affineplane.vec3

module.exports = (ts) => {
  ts.test('case: zeroes and ones', (t) => {
    t.ok(
      vec3.equal(
        { x: 0, y: 0, z: 0 },
        { x: 0, y: 0, z: 0 }
      ),
      'zero vectors equal'
    )

    t.notOk(
      vec3.equal(
        { x: 1, y: 1, z: 1 },
        { x: 1, y: 1, z: 2 }
      ),
      'vectors different'
    )

    t.end()
  })
}
