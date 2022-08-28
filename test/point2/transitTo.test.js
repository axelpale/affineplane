const point2 = require('../../lib/point2')

module.exports = (ts) => {
  ts.test('case: basic transit to plane', (t) => {
    t.deepEqual(point2.transitTo(
      { x: 20, y: 30 },
      { a: 1, b: 0, x: 20, y: 30 }
    ), { x: 0, y: 0 })

    t.end()
  })
}
