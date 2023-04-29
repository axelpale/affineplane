const point3 = require('../../lib/point3')

module.exports = (ts) => {
  ts.test('case: distance to ray', (t) => {
    let point, ray

    point = { x: 0, y: 0, z: 0 }
    ray = { x: 0, y: 0, z: 0, dx: 1, dy: 0, dz: 0 }
    t.equal(
      point3.distanceToRay(point, ray),
      0,
      'trivial zero distance'
    )

    point = { x: -5, y: 0, z: 0 }
    ray = { x: 0, y: 0, z: 0, dx: 1, dy: 0, dz: 0 }
    t.equal(
      point3.distanceToRay(point, ray),
      5,
      'point on the line but behind ray plane'
    )

    point = { x: 0, y: 1, z: 0 }
    ray = { x: 0, y: 0, z: 0, dx: 1, dy: 0, dz: 0 }
    t.equal(
      point3.distanceToRay(point, ray),
      1,
      'simple distance along y'
    )

    point = { x: 0, y: 0, z: 0 }
    ray = { x: 1, y: 2, z: 2, dx: 0, dy: 0, dz: 5 }
    t.equal(
      point3.distanceToRay(point, ray),
      3,
      'simple distance behind ray plane'
    )

    point = { x: 5, y: 5, z: 0 }
    ray = { x: 10, y: 0, z: 0, dx: 0, dy: 2, dz: 0 }
    t.almostEqual(
      point3.distanceToRay(point, ray),
      5,
      'distance along x'
    )

    point = { x: 5, y: 5, z: 0 }
    ray = { x: 0, y: 0, z: 2, dx: 2, dy: 2, dz: 0 }
    t.almostEqual(
      point3.distanceToRay(point, ray),
      2,
      'distance along z'
    )

    t.end()
  })
}
