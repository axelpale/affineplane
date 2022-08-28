const point2 = require('../../lib/point2')

module.exports = (ts) => {
  ts.test('case: average point2', (t) => {
    t.deepEqual(
      point2.average([
        { x: 3, y: 0 },
        { x: 0, y: 3 },
        { x: 0, y: 0 }
      ]),
      { x: 1, y: 1 },
      'mean of three points'
    )

    t.end()
  })
}
