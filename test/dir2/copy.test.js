const affineplane = require('../../index')
const dir2 = affineplane.dir2

module.exports = (ts) => {
  ts.test('case: copy', (t) => {
    const dir = { x: 1, y: 0 }
    t.notEqual(
      dir2.copy(dir),
      dir,
      'ensure different object'
    )

    t.deepEqual(
      dir2.copy(dir),
      dir,
      'ensure deep equality'
    )

    t.end()
  })
}
