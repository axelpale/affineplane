const affineplane = require('../../index')
const box3 = affineplane.box3

module.exports = (ts) => {
  ts.test('case: basic transitFrom', (t) => {
    let box, basis

    box = { a: 1, b: 0, x: 0, y: 0, z: 0, w: 10, h: 6, d: 3 }
    basis = { a: 1, b: 0, x: 0, y: 0, z: 0 }

    t.deepEqual(
      box3.transitFrom(box, basis),
      box,
      'identity does not change box'
    )

    box = { a: 1, b: 0, x: 2, y: 0, z: 4, w: 10, h: 6, d: 3 }
    basis = { a: 2, b: 0, x: 0, y: 0, z: 0 }
    t.deepEqual(
      box3.transitFrom(box, basis),
      { a: 1, b: 0, x: 4, y: 0, z: 8, w: 20, h: 12, d: 6 },
      'origin and size should scale'
    )

    t.end()
  })
}
