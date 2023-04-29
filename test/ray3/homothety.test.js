const ray3 = require('../../lib/ray3')

module.exports = (ts) => {
  ts.test('case: ray homothety', (t) => {
    let ray, center

    ray = { x: 1, y: 1, z: 1, dx: 1, dy: 0, dz: 0 }
    center = { x: 1, y: 1, z: 1 }
    t.deepEqual(
      ray3.homothety(ray, center, 3),
      { x: 1, y: 1, z: 1, dx: 1, dy: 0, dz: 0 },
      'identical origin should not scale vector'
    )

    ray = { x: 1, y: 0, z: 0, dx: 1, dy: 0, dz: 0 }
    center = { x: 0, y: 0, z: 0 }
    t.deepEqual(
      ray3.homothety(ray, center, 2),
      { x: 2, y: 0, z: 0, dx: 2, dy: 0, dz: 0 },
      'double about zero'
    )

    t.end()
  })
}
