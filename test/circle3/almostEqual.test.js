const fine = require('../../index') // should be exported
const circle3 = fine.circle3

module.exports = (ts) => {
  ts.test('case: margin', (t) => {
    const p = { x: 0, y: 0, z: 0, r: 0 }
    const q = { x: 3, y: 3, z: 3, r: 3 }
    t.false(circle3.almostEqual(p, q, 1))
    t.false(circle3.almostEqual(p, q, 11))
    t.true(circle3.almostEqual(p, q, 12))
    t.true(circle3.almostEqual(p, q, 13))

    t.end()
  })
}
