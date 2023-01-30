const affineplane = require('../../index')
const size3 = affineplane.size3

module.exports = (ts) => {
  ts.test('case: basic atNorm', (t) => {
    const sz = size3.create(1, 2, 3)

    t.deepEqual(
      size3.atNorm(sz, 0, 0, 0),
      { x: 0, y: 0, z: 0 },
      'corner zero'
    )

    t.deepEqual(
      size3.atNorm(sz, 1, 1, 1),
      { x: 1, y: 2, z: 3 },
      'corner one'
    )

    t.end()
  })
}
