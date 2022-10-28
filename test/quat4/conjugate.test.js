const affineplane = require('../../index')
const quat4 = affineplane.quat4

module.exports = (ts) => {
  ts.test('case: basic conjugate', (t) => {
    t.deepEqual(
      quat4.conjugate({ a: 1, b: 2, c: -3, d: 4 }),
      { a: 1, b: -2, c: 3, d: -4 },
      'vector part should be negated'
    )

    t.end()
  })
}
