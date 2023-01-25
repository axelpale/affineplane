const affineplane = require('../../index')
const box2 = affineplane.box2

module.exports = (ts) => {
  ts.test('case: basic transitFrom', (t) => {
    let box, plane

    box = { a: 1, b: 0, x: 0, y: 0, w: 10, h: 6 }
    plane = { a: 1, b: 0, x: 0, y: 0 }

    t.deepEqual(
      box2.transitFrom(box, plane),
      box,
      'identity does not change box'
    )

    box = { a: 2, b: 0, x: 2, y: 0, w: 10, h: 6 }
    plane = { a: 2, b: 0, x: 0, y: 0 }
    t.deepEqual(
      box2.transitFrom(box, plane),
      { a: 4, b: 0, x: 4, y: 0, w: 20, h: 12 },
      'should scale'
    )

    t.end()
  })
}
