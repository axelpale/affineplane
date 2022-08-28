const affineplane = require('../../index')
const size2 = affineplane.size2

module.exports = (ts) => {
  ts.test('case: basic', (t) => {
    t.deepEqual(
      size2.create(1, -2),
      { w: 1, h: 2 },
      'should be absolute value'
    )

    t.deepEqual(
      size2.create(0, 0),
      { w: 0, h: 0 },
      'should allow zero'
    )

    t.end()
  })
}
