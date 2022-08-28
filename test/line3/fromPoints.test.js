const line3 = require('../../lib/line3')

module.exports = (ts) => {
  ts.test('case: create line3 from two points', (t) => {
    const p1 = { x: 2, y: 1, z: 0 }
    const p2 = { x: 5, y: 4, z: 3 }
    t.deepEqual(
      line3.fromPoints(p1, p2),
      { origin: p1, span: { x: 3, y: 3, z: 3 } },
      'correct span'
    )

    t.end()
  })
}
