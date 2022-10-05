const affineplane = require('../../index')
const dir2 = affineplane.dir2
const PI = Math.PI

module.exports = (ts) => {
  ts.test('case: basic', (t) => {
    let dir, plane

    dir = dir2.fromAngle(PI)
    plane = { a: 1, b: 0, x: 0, y: 0 }
    t.almostEqual(
      dir2.transitTo(dir, plane),
      dir,
      'identity plane does not change directions'
    )

    dir = dir2.fromAngle(PI)
    plane = { a: 0, b: 2, x: 10, y: 10 }
    t.almostEqual(
      dir2.transitTo(dir, plane),
      dir2.fromAngle(PI / 2),
      'only plane angle should matter'
    )

    t.end()
  })
}
