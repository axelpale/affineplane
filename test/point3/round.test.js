const point3 = require('../../lib/point3')

module.exports = (ts) => {
  ts.test('case: basic round', (t) => {
    t.deepEqual(
      point3.round({ x: 0, y: 1, z: 2 }),
      { x: 0, y: 1, z: 2 },
      'already integer'
    )

    t.deepEqual(
      point3.round({ x: 0.2, y: 1.4, z: 1.51 }),
      { x: 0, y: 1, z: 2 },
      'should round to nearest integer'
    )

    t.end()
  })
}
