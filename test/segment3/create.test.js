const affineplane = require('../../index')
const segment3 = affineplane.segment3

module.exports = (ts) => {
  ts.test('case: basic create', (t) => {
    t.deepEqual(
      segment3.create({ x: 0, y: 0, z: 0 }, { x: 1, y: 1, z: 1 }),
      [{ x: 0, y: 0, z: 0 }, { x: 1, y: 1, z: 1 }],
      'should form an array'
    )

    t.end()
  })
}
