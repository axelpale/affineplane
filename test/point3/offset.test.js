const point3 = require('../../lib/point3')

module.exports = (ts) => {
  ts.test('case: basic offset', (t) => {
    t.deepEqual(point3.offset(
      { x: 0, y: 0, z: 0 },
      1, 1, 1
    ), { x: 1, y: 1, z: 1 })

    t.end()
  })
}
