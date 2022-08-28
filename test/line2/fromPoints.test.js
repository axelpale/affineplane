const line2 = require('../../lib/line2')

module.exports = (ts) => {
  ts.test('case: create line2 from two points', (t) => {
    const p1 = { x: 2, y: 1 }
    const p2 = { x: 5, y: 4 }
    t.deepEqual(
      line2.fromPoints(p1, p2),
      { origin: p1, span: { x: 3, y: 3 } },
      'correct span'
    )

    t.end()
  })
}
