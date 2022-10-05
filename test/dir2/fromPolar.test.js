const dir2 = require('../../index').dir2
const PI = Math.PI

module.exports = (ts) => {
  ts.test('case: dir from polar angle', (t) => {
    t.almostEqual(
      dir2.create(PI / 2),
      { x: 0, y: 1 },
      'value between limits'
    )

    t.almostEqual(
      dir2.fromAngle(-PI),
      { x: -1, y: 0 },
      'allow -pi'
    )

    t.almostEqual(
      dir2.fromAngle(PI * 3),
      dir2.fromAngle(PI),
      'value over limit'
    )

    t.almostEqual(
      dir2.fromPolar(-3 * PI),
      dir2.fromAngle(PI),
      'value below limit, allow alias'
    )

    t.end()
  })
}
