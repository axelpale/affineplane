const affineplane = require('../../index')
const size2 = affineplane.size2

module.exports = (ts) => {
  ts.test('case: basic', (t) => {
    let size, plane

    size = { w: 1, h: 2 }
    plane = { a: 1, b: 0, x: 0, y: 0 }
    t.deepEqual(
      size2.transitTo(size, plane),
      size,
      'identity does not change size'
    )

    size = { w: 2, h: 4 }
    plane = { a: 0, b: 2, x: 10, y: 10 }
    t.deepEqual(
      size2.transitTo(size, plane),
      { w: 1, h: 2 },
      'only scale matters'
    )

    t.end()
  })
}
