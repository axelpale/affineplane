const sphere2 = require('../../lib/sphere2')

module.exports = (ts) => {
  ts.test('case: create sphere2 from two points', (t) => {
    const p1 = { x: 1, y: 1 }
    const p2 = { x: 5, y: 4 }
    t.deepEqual(
      sphere2.fromPoints(p1, p2),
      { x: 1, y: 1, r: 5 },
      'correct origin and radius'
    )

    t.end()
  })
}
