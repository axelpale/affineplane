const point3 = require('../../lib/point3')

module.exports = (ts) => {
  ts.test('case: basic array', (t) => {
    t.deepEqual(
      point3.fromArray([1, 2, 3]),
      { x: 1, y: 2, z: 3 }
    )
    t.deepEqual(
      point3.fromArray([1, 2, 3, 4]),
      { x: 1, y: 2, z: 3 },
      'strip extra elements'
    )

    t.end()
  })
}
