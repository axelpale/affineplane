const point3 = require('../../lib/point3')

module.exports = (ts) => {
  ts.test('case: basic homothety', (t) => {
    let point, center

    point = { x: 0, y: 0, z: 0 }
    center = { x: 0, y: 0, z: 0 }
    t.deepEqual(
      point3.homothety(point, center, 3),
      { x: 0, y: 0, z: 0 },
      'identical point and center'
    )

    point = { x: 2, y: 0, z: 2 }
    center = { x: 0, y: 0, z: 0 }
    t.deepEqual(
      point3.homothety(point, center, 2),
      { x: 4, y: 0, z: 4 },
      'double about zero'
    )

    t.end()
  })
}
