const affineplane = require('../../index')
const segment2 = affineplane.segment2

module.exports = (ts) => {
  ts.test('case: basic transitFrom', (t) => {
    // let seg, plane

    const seg = [{ x: 0, y: 0 }, { x: 1, y: 1 }]
    const basis = { a: 2, b: 0, x: 0, y: 2 }

    t.deepEqual(
      segment2.transitFrom(seg, basis),
      [{ x: 0, y: 2 }, { x: 2, y: 4 }],
      'scale and translation should affect'
    )

    t.end()
  })
}
