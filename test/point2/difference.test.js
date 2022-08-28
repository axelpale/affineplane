const point2 = require('../../lib/point2')

module.exports = (ts) => {
  ts.test('case: basic difference', (t) => {
    t.deepEqual(point2.difference(
      { x: 3, y: 0 },
      { x: 0, y: 3 }
    ), { x: -3, y: 3 })

    t.end()
  })
}
