const point2 = require('../../lib/point2')

module.exports = (ts) => {
  ts.test('case: basic transit from plane', (t) => {
    const plane = { a: 1, b: 0, x: 2, y: 3 }

    t.deepEqual(
      point2.transitFrom({ x: 2, y: 3 }, plane),
      { x: 4, y: 6 }
    )

    t.end()
  })
}
