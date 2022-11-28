const point2 = require('../../lib/point2')

module.exports = (ts) => {
  ts.test('case: basic difference', (t) => {
    t.deepEqual(point2.direction(
      { x: 3, y: 0 },
      { x: 3, y: 3 }
    ), { x: 0, y: 1 }, 'should point pos y')

    t.deepEqual(point2.direction(
      { x: 3, y: 3 },
      { x: 3, y: 3 }
    ), { x: 1, y: 0 }, 'should default when no dir')

    t.end()
  })
}
