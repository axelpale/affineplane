const affineplane = require('../../index')
const vec4 = affineplane.vec4
const SQ2 = Math.sqrt(2)

module.exports = (ts) => {
  ts.test('case: basic hamilton product', (t) => {
    t.deepEqual(
      vec4.hamilton(
        { r: 0, x: SQ2, y: SQ2, z: 0 },
        { r: 0, x: 0, y: 0, z: 2 }
      ),
      { r: 0, x: 2 * SQ2, y: -2 * SQ2, z: 0 },
      'hamilton of two 3D vectors'
    )

    t.end()
  })
}
