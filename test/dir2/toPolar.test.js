const dir2 = require('../../index').dir2
const PI = Math.PI

module.exports = (ts) => {
  ts.test('case: dir to polar angle', (t) => {
    t.almostEqual(
      dir2.toPolar(dir2.fromPolar(PI / 2)),
      PI / 2,
      'symmetry'
    )

    t.almostEqual(
      dir2.toPolar({ x: 1, y: 1 }),
      dir2.toAngle({ x: 1, y: 1 }),
      'alias'
    )

    t.end()
  })
}
