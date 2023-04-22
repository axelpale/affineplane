const affineplane = require('../../index')
const segment3 = affineplane.segment3

module.exports = (ts) => {
  ts.test('case: toVector', (t) => {
    t.deepEqual(
      segment3.toVector([{ x: 0, y: 0, z: 0 }, { x: 1, y: 1, z: 1 }]),
      { x: 1, y: 1, z: 1 },
      'should create a vector'
    )

    t.end()
  })
}
