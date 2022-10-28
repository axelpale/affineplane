const affineplane = require('../../index')
const vec4 = affineplane.vec4

module.exports = (ts) => {
  ts.test('case: zeroes and ones', (t) => {
    t.deepEqual(
      vec4.add(
        { x: 0, y: 0, z: 0, w: 0 },
        { x: 0, y: 0, z: 0, w: 0 }
      ),
      { x: 0, y: 0, z: 0, w: 0 },
      'zeroes'
    )

    t.deepEqual(
      vec4.add(
        { x: 1, y: 1, z: 1, w: 1 },
        { x: 1, y: 1, z: 1, w: 1 }
      ),
      { x: 2, y: 2, z: 2, w: 2 },
      'ones'
    )

    t.end()
  })
}
