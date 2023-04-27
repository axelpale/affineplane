const affineplane = require('../../index')
const dir3 = affineplane.dir3

module.exports = (ts) => {
  ts.test('case: copy', (t) => {
    const dir = { x: 1, y: 0, z: 0 }
    t.notEqual(
      dir3.copy(dir),
      dir,
      'ensure different object'
    )

    t.deepEqual(
      dir3.copy(dir),
      dir,
      'ensure deep equality'
    )

    t.end()
  })
}
