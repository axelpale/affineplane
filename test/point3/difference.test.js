const point3 = require('../../lib/point3')

module.exports = (ts) => {
  ts.test('case: basic difference', (t) => {
    t.deepEqual(point3.difference(
      { x: 3, y: 0, z: 0 },
      { x: 0, y: 0, z: 3 }
    ), { x: -3, y: 0, z: 3 })

    t.end()
  })
}
