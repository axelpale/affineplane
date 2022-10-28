const affineplane = require('../../index')
const path3 = affineplane.path3

module.exports = (ts) => {
  ts.test('case: basic create', (t) => {
    t.deepEqual(
      path3.create([{ x: 0, y: 0, z: 0 }, { x: 1, y: 1, z: 1, w: 2 }]),
      [{ x: 0, y: 0, z: 0 }, { x: 1, y: 1, z: 1 }],
      'should remove extra property'
    )

    t.end()
  })
}
