const affineplane = require('../../index')
const rect3 = affineplane.rect3

module.exports = (ts) => {
  ts.test('case: basic transitFrom', (t) => {
    let rect, plane

    rect = {
      basis: { a: 1, b: 0, x: 0, y: 0, z: 0 },
      size: { w: 10, h: 6 }
    }
    plane = { a: 1, b: 0, x: 0, y: 0, z: 0 }

    t.deepEqual(
      rect3.transitFrom(rect, plane),
      rect,
      'identity does not change rect'
    )

    rect = {
      basis: { a: 2, b: 0, x: 2, y: 0, z: 2 },
      size: { w: 10, h: 6 }
    }
    plane = { a: 2, b: 0, x: 0, y: 0, z: 3 }
    t.deepEqual(
      rect3.transitFrom(rect, plane),
      {
        basis: { a: 4, b: 0, x: 4, y: 0, z: 7 }, // 7: dz=2 at m=2 + dz=3
        size: { w: 10, h: 6 }
      },
      'should scale and translate'
    )

    t.end()
  })
}
