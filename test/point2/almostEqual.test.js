const point2 = require('../../lib/point2')

module.exports = (ts) => {
  ts.test('case: margin', (t) => {
    const p = { x: 0, y: 0 }
    const q = { x: 3, y: 3 }

    t.false(point2.almostEqual(p, q, 1), 'should be way too different')
    t.false(point2.almostEqual(p, q, 5), 'should be just different enough')
    t.true(point2.almostEqual(p, q, 6), 'should be within tolerance')

    t.end()
  })
}
