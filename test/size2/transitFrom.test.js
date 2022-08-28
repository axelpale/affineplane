const affineplane = require('../../index')
const size2 = affineplane.size2

module.exports = (ts) => {
  ts.test('case: basic', (t) => {
    let size, plane

    size = { w: 1, h: 2 }
    plane = { a: 1, b: 0, x: 0, y: 0 }
    t.deepEqual(
      size2.transitFrom(size, plane),
      { w: 1, h: 2 },
      'identity does not change size'
    )

    size = { w: 2, h: 3 }
    plane = { a: 2, b: 0, x: 0, y: 0 }
    t.deepEqual(
      size2.transitFrom(size, plane),
      { w: 4, h: 6 },
      'only scaling affects'
    )

    t.end()
  })
}
