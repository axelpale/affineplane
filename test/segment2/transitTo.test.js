const affineplane = require('../../index')
const segment2 = affineplane.segment2

module.exports = (ts) => {
  ts.test('case: basic transitTo', (t) => {
    // let seg, plane

    const seg = [{ x: 0, y: 2 }, { x: 2, y: 4 }]
    const plane = { a: 2, b: 0, x: 0, y: 2 }

    t.deepEqual(
      segment2.transitTo(seg, plane),
      [{ x: 0, y: 0 }, { x: 1, y: 1 }],
      'scale and translation should affect'
    )

    t.end()
  })
}
