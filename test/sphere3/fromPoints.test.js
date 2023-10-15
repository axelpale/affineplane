const sphere3 = require('../../lib/sphere3')

module.exports = (ts) => {
  ts.test('case: create sphere3 from two points', (t) => {
    const p1 = { x: 1, y: 1, z: 1 }
    const p2 = { x: 3, y: 3, z: 2 }
    t.deepEqual(
      sphere3.fromPoints(p1, p2),
      { x: 1, y: 1, z: 1, r: 3 },
      'correct origin and radius'
    )

    t.end()
  })
}
