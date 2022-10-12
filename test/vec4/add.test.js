const affineplane = require('../../index')
const vec4 = affineplane.vec4

module.exports = (ts) => {
  ts.test('case: zeroes and ones', (t) => {
    t.deepEqual(
      vec4.add(
        { r: 0, x: 0, y: 0, z: 0 },
        { r: 0, x: 0, y: 0, z: 0 }
      ),
      { r: 0, x: 0, y: 0, z: 0 },
      'zeroes'
    )

    t.deepEqual(
      vec4.add(
        { r: 1, x: 1, y: 1, z: 1 },
        { r: 1, x: 1, y: 1, z: 1 }
      ),
      { r: 2, x: 2, y: 2, z: 2 },
      'ones'
    )

    t.end()
  })
}
