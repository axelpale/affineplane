const affineplane = require('../../index')
const box2 = affineplane.box2

module.exports = (ts) => {
  ts.test('case: basic transitTo', (t) => {
    let box, plane

    box = { a: 1, b: 0, x: 0, y: 0, w: 10, h: 6 }
    plane = { a: 1, b: 0, x: 0, y: 0 }
    t.deepEqual(
      box2.transitTo(box, plane),
      box,
      'identity does not change rect'
    )

    box = { a: 2, b: 0, x: 2, y: 0, w: 10, h: 6 }
    plane = { a: 2, b: 0, x: 0, y: 0 }
    t.deepEqual(
      box2.transitTo(box, plane),
      { a: 1, b: 0, x: 1, y: 0, w: 5, h: 3 },
      'should scale also size'
    )

    t.end()
  })
}
