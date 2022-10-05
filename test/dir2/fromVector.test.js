const dir2 = require('../../index').dir2
const PI = Math.PI

module.exports = (ts) => {
  ts.test('case: dir from vector', (t) => {
    t.almostEqual(
      dir2.fromVector({ x: 0, y: 0 }),
      { x: 1, y: 0 },
      'arbitrary direction'
    )

    t.almostEqual(
      dir2.fromVector({ x: 1, y: 1 }),
      dir2.fromAngle(PI / 4),
      'allow non-unit vector'
    )

    t.end()
  })
}
