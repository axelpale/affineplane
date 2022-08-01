const point3 = require('../../lib/point3')

module.exports = (ts) => {
  ts.test('case: smoke', (t) => {
    t.ok(point3.equal(
      { x: 0, y: 1, z: 0 },
      { x: 0, y: 1, z: 0 }
    ))

    t.end()
  })
}
