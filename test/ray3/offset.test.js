const ray3 = require('../../lib/ray3')

module.exports = (ts) => {
  ts.test('case: ray3 offset', (t) => {
    t.deepEqual(ray3.offset(
      { x: 0, y: 0, z: 0, dx: 0, dy: 0, dz: 1 },
      1, 1, 1
    ), { x: 1, y: 1, z: 1, dx: 0, dy: 0, dz: 1 })

    t.end()
  })
}
