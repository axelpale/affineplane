const affineplane = require('../../index')
const size3 = affineplane.size3

module.exports = (ts) => {
  ts.test('case: basic transitTo', (t) => {
    let size, basis

    size = { w: 1, h: 2, d: 3 }
    basis = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    t.deepEqual(
      size3.transitTo(size, basis),
      size,
      'identity does not change size'
    )

    size = { w: 2, h: 4, d: 6 }
    basis = { a: 0, b: 2, x: 10, y: 10, z: 10 }
    t.deepEqual(
      size3.transitTo(size, basis),
      { w: 1, h: 2, d: 3 },
      'only scale matters'
    )

    t.end()
  })
}
