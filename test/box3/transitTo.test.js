const affineplane = require('../../index')
const box3 = affineplane.box3

module.exports = (ts) => {
  ts.test('case: basic transitTo', (t) => {
    let box, basis

    box = { a: 1, b: 0, x: 0, y: 0, z: 0, w: 10, h: 6, d: 3 }
    basis = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    t.deepEqual(
      box3.transitTo(box, basis),
      box,
      'identity does not change rect'
    )

    box = { a: 1, b: 0, x: 2, y: 0, z: 4, w: 10, h: 6, d: 3 }
    basis = { a: 2, b: 0, x: 0, y: 0, z: 0 }
    t.deepEqual(
      box3.transitTo(box, basis),
      { a: 1, b: 0, x: 1, y: 0, z: 2, w: 5, h: 3, d: 1.5 },
      'should scale origin and size'
    )

    t.end()
  })
}
