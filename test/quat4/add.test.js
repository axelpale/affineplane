const affineplane = require('../../index')
const quat4 = affineplane.quat4

module.exports = (ts) => {
  ts.test('case: basic add', (t) => {
    t.deepEqual(
      quat4.add(
        { a: 1, b: 2, c: 3, d: 4 },
        { a: 1, b: 2, c: 3, d: 4 }
      ),
      { a: 2, b: 4, c: 6, d: 8 },
      'should be double'
    )

    t.end()
  })
}
