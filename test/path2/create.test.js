const affineplane = require('../../index')
const path2 = affineplane.path2

module.exports = (ts) => {
  ts.test('case: basic create', (t) => {
    t.deepEqual(
      path2.create([{ x: 0, y: 0, z: 0 }, { x: 1, y: 1 }]),
      [{ x: 0, y: 0 }, { x: 1, y: 1 }],
      'should remove extra property'
    )

    t.end()
  })
}
