const affineplane = require('../../index')
const size3 = affineplane.size3

module.exports = (ts) => {
  ts.test('case: basic transitFrom', (t) => {
    let size, basis

    size = { w: 1, h: 2, d: 3 }
    basis = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    t.deepEqual(
      size3.transitFrom(size, basis),
      { w: 1, h: 2, d: 3 },
      'identity does not change size'
    )

    size = { w: 2, h: 3, d: 4 }
    basis = { a: 2, b: 0, x: 200, y: 0, z: 400 }
    t.deepEqual(
      size3.transitFrom(size, basis),
      { w: 4, h: 6, d: 8 },
      'only scaling affects'
    )

    t.end()
  })
}
