const dir3 = require('../../index').dir3
const PI = Math.PI

module.exports = (ts) => {
  ts.test('case: basic transit from plane', (t) => {
    let dir, plane

    dir = dir3.fromVector({ x: 1, y: 0, z: 0 })
    plane = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    t.almostEqual(
      dir3.transitFrom(dir, plane),
      dir,
      'identity plane does not change direction'
    )

    dir = dir3.fromVector({ x: 0, y: 1, z: 1 })
    plane = { a: 0, b: 2, x: 10, y: 10, z: 10 }
    t.almostEqual(
      dir3.transitFrom(dir, plane),
      dir3.fromVector({ x: -1, y: 0, z: 1 }),
      'scale and translation do not matter, angle does'
    )

    t.end()
  })
}
