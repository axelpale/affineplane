const sphere2 = require('../../lib/sphere2')

module.exports = (ts) => {
  ts.test('case: basic collisionArea', (t) => {
    t.equal(
      sphere2.collisionArea({ x: 0, y: 0, r: 0 }, { x: 0, y: 0, r: 0 }),
      0,
      'zero spheres have zero overlap'
    )

    t.equal(
      sphere2.collisionArea({ x: 0, y: 0, r: 1 }, { x: 0, y: 0, r: 2 }),
      Math.PI,
      'concentric spheres overlap'
    )

    t.almostEqual(
      sphere2.collisionArea({ x: 0, y: 0, r: 1 }, { x: 1, y: 0, r: 1 }),
      // overlap = 2 * segment
      // segment = π/3 - sqrt(3)/4
      (2 * Math.PI / 3) - Math.sqrt(3) / 2,
      'spheres overlap'
    )

    t.end()
  })
}
