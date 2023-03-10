const sphere2 = require('../../lib/sphere2')

module.exports = (ts) => {
  ts.test('case: margin', (t) => {
    const p = { x: 0, y: 0, r: 0 }
    const q = { x: 3, y: 3, r: 3 }
    t.false(sphere2.almostEqual(p, q, 1))
    t.false(sphere2.almostEqual(p, q, 8))
    t.true(sphere2.almostEqual(p, q, 9))
    t.true(sphere2.almostEqual(p, q, 10))

    t.end()
  })
}
