const point3 = require('../../lib/point3')

module.exports = (ts) => {
  ts.test('case: margin', (t) => {
    const p = { x: 0, y: 0, z: 0 }
    const q = { x: 3, y: 3, z: 3 }
    t.false(point3.almostEqual(p, q, 1))
    t.false(point3.almostEqual(p, q, 8))
    t.true(point3.almostEqual(p, q, 9))

    t.end()
  })
}
