const affineplane = require('../../index')
const quat4 = affineplane.quat4

module.exports = (ts) => {
  ts.test('case: basic diff', (t) => {
    t.deepEqual(
      quat4.diff(
        { a: 1, b: 2, c: 3, d: 4 },
        { a: 1, b: 2, c: 3, d: 4 }
      ),
      { a: 0, b: 0, c: 0, d: 0 },
      'should be zero quaternion'
    )

    t.end()
  })
}
