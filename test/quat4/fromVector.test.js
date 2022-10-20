const affineplane = require('../../index')
const quat4 = affineplane.quat4

module.exports = (ts) => {
  ts.test('case: basic fromVector', (t) => {
    t.deepEqual(
      quat4.fromVector({ x: 1, y: 2, z: -3 }),
      { a: 0, b: 1, c: 2, d: -3 },
      'scalar should be zero'
    )

    t.end()
  })
}
