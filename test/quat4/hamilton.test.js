const affineplane = require('../../index')
const quat4 = affineplane.quat4
const SQ2 = Math.sqrt(2)

module.exports = (ts) => {
  ts.test('case: basic hamilton product', (t) => {
    t.deepEqual(
      quat4.hamilton(
        { a: 0, b: SQ2, c: SQ2, d: 0 },
        { a: 0, b: 0, c: 0, d: 2 }
      ),
      { a: 0, b: 2 * SQ2, c: -2 * SQ2, d: 0 },
      'hamilton of two 3D vectors'
    )

    t.end()
  })
}
