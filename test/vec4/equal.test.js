const affineplane = require('../../index')
const vec4 = affineplane.vec4

module.exports = (ts) => {
  ts.test('case: zeroes and ones', (t) => {
    t.ok(
      vec4.equal(
        { x: 0, y: 0, z: 0, w: 0 },
        { x: 0, y: 0, z: 0, w: 0 }
      ),
      'should equal zero vectors'
    )

    t.notOk(
      vec4.equal(
        { x: 1, y: 2, z: 3, w: 4 },
        { x: 1, y: 2, z: 3, w: -4 }
      ),
      'should detect different vectors'
    )

    t.notOk(
      vec4.equal(
        { x: 1, y: 2, z: 3, w: 4 },
        { x: 1, y: 2, z: 3.000000001, w: 4 }
      ),
      'should detect slightly different vectors'
    )

    t.end()
  })
}
