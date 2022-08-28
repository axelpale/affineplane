const point3 = require('../../lib/point3')

module.exports = (ts) => {
  ts.test('case: happy arrays', (t) => {
    t.deepEqual(
      point3.toArray({ x: 1, y: 2, z: 3 }),
      [1, 2, 3]
    )
    t.deepEqual(
      point3.toArray({ x: 1, y: 2, z: 3, r: 4 }),
      [1, 2, 3],
      'strip extra elements'
    )

    t.end()
  })
}
