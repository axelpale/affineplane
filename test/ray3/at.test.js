const ray3 = require('../../lib/ray3')

module.exports = (ts) => {
  ts.test('case: basic ray at', (t) => {
    const ray = { x: 1, y: 1, z: 1, dx: 1, dy: 1, dz: -1 }

    t.deepEqual(
      ray3.at(ray, 3),
      { x: 4, y: 4, z: -2 },
      'three spans away from origin'
    )

    t.deepEqual(
      ray3.at(ray, -3),
      { x: 1, y: 1, z: 1 },
      'negative position at origin'
    )

    t.end()
  })
}
