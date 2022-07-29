const point3 = require('../../lib/point3')

module.exports = (ts) => {
  ts.test('case: average point3', (t) => {
    t.deepEqual(point3.average([
      { x: 3, y: 0, z: 0 },
      { x: 0, y: 3, z: 0 },
      { x: 0, y: 0, z: 3 }
    ]), { x: 1, y: 1, z: 1 })

    t.end()
  })
}
