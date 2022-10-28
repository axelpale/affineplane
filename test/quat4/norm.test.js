const affineplane = require('../../index')
const quat4 = affineplane.quat4

module.exports = (ts) => {
  ts.test('case: basic norm', (t) => {
    t.equal(
      quat4.norm({ a: 1, b: 1, c: 1, d: 1 }),
      2,
      'should be square root of squared sum'
    )

    t.end()
  })
}
