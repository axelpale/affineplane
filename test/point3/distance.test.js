const point3 = require('../../lib/point3')

module.exports = (ts) => {
  ts.test('case: basic distance', (t) => {
    t.equal(point3.distance(
      { x: 0, y: 0, z: 0 },
      { x: 3, y: 4, z: 12 }
    ), 13)

    t.end()
  })
}
