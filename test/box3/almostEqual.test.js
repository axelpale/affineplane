const box3 = require('../../lib/box3')

module.exports = (ts) => {
  ts.test('case: tolerance', (t) => {
    const p = { a: 1, b: 0, x: 0, y: 0, z: 0, w: 1, h: 2, d: 3 }
    const q = { a: 1, b: 0, x: 1, y: 0, z: 0, w: 1, h: 2, d: 2 }
    t.false(box3.almostEqual(p, q, 1), 'above tolerance')
    t.true(box3.almostEqual(p, q, 2), 'at tolerance')
    t.true(box3.almostEqual(p, q, 3), 'below tolerance')

    t.end()
  })
}
