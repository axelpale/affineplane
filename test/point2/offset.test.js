const point2 = require('../../lib/point2')

module.exports = (ts) => {
  ts.test('case: basic offset', (t) => {
    t.deepEqual(
      point2.offset({ x: 0, y: 0 }, 1, 1),
      { x: 1, y: 1 },
      'zero point should move by unit'
    )

    t.deepEqual(
      point2.offset({ x: 3, y: -3 }, 1, 1),
      { x: 4, y: -2 },
      'non zero point should move by unit'
    )

    t.end()
  })
}
