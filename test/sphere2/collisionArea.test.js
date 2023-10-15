const sphere2 = require('../../lib/sphere2')
const sqrt = Math.sqrt
const acos = Math.acos

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

    t.equal(
      sphere2.collisionArea({ x: 0, y: 0, r: 1 }, { x: 1.5, y: 1.5, r: 1 }),
      0,
      'spheres too far'
    )

    t.almostEqual(
      sphere2.collisionArea({ x: 0, y: 0, r: 1 }, { x: 1, y: 0, r: 1 }),
      // overlap = 2 * segment
      // segment = π/3 - sqrt(3)/4
      (2 * Math.PI / 3) - Math.sqrt(3) / 2,
      'spheres overlap, sector angle < 180'
    )

    t.almostEqual(
      sphere2.collisionArea({ x: 0, y: 0, r: 3 }, { x: 2, y: 0, r: 2 }),
      // overlap = small circle - small circle segment + large circle segment
      4 * Math.PI + 9 * acos(3 / 4) - 4 * acos(1 / 8) - 3 * sqrt(7) / 2,
      'spheres overlap, sector angle > 180'
    )

    t.almostEqual(
      sphere2.collisionArea({ x: 967, y: 485, r: 212 }, { x: 667, y: 485, r: 825 }),
      // overlap = small circle
      Math.PI * 212 * 212,
      'real world numbers'
    )

    t.end()
  })
}
