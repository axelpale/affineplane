const affineplane = require('../../index')
const dir2 = affineplane.dir2
const PI = Math.PI

module.exports = (ts) => {
  ts.test('case: basic', (t) => {
    let dir, plane

    dir = dir2.fromVector({ x: -1, y: 0 })
    plane = { a: 1, b: 0, x: 0, y: 0 }
    t.almostEqual(
      dir2.transitFrom(dir, plane),
      dir,
      'identity does not change direction'
    )

    dir = dir2.fromAngle(2 * PI)
    plane = { a: 0, b: 2, x: 10, y: 10 }
    t.almostEqual(
      dir2.transitFrom(dir, plane),
      dir = dir2.fromAngle(PI / 2),
      'plane scale or location do not matter, angle does'
    )

    t.end()
  })
}
