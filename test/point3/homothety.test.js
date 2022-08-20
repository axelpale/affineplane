const point3 = require('../../lib/point3')

module.exports = (ts) => {
  ts.test('case: basic homothety', (t) => {
    let center = { x: 0, y: 0, z: 0 }
    t.deepEqual(
      point3.homothety({ x: 0, y: 0, z: 0 }, center, 3),
      { x: 0, y: 0, z: 0 },
      'identical point and center'
    )

    t.deepEqual(
      point3.homothety({ x: 2, y: 0, z: 2 }, center, 2),
      { x: 4, y: 0, z: 4 },
      'double about zero'
    )

    t.end()
  })
}
