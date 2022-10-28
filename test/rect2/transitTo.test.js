const affineplane = require('../../index')
const rect2 = affineplane.rect2

module.exports = (ts) => {
  ts.test('case: basic transitTo', (t) => {
    let rect, plane

    rect = {
      basis: { a: 1, b: 0, x: 0, y: 0 },
      size: { w: 10, h: 6 }
    }
    plane = { a: 1, b: 0, x: 0, y: 0 }

    t.deepEqual(
      rect2.transitTo(rect, plane),
      rect,
      'identity does not change rect'
    )

    rect = {
      basis: { a: 2, b: 0, x: 2, y: 0 },
      size: { w: 10, h: 6 }
    }
    plane = { a: 2, b: 0, x: 0, y: 0 }
    t.deepEqual(
      rect2.transitTo(rect, plane),
      {
        basis: { a: 1, b: 0, x: 1, y: 0 },
        size: { w: 10, h: 6 }
      },
      'should scale and translate'
    )

    t.end()
  })
}
