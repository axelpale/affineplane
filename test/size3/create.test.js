const affineplane = require('../../index')
const size3 = affineplane.size3

module.exports = (ts) => {
  ts.test('case: basic', (t) => {
    t.deepEqual(
      size3.create(1, -2, -3),
      { w: 1, h: 2, d: 3 },
      'should be absolute value'
    )

    t.deepEqual(
      size3.create(0, 0, 0),
      { w: 0, h: 0, d: 0 },
      'should allow zero'
    )

    t.end()
  })
}
