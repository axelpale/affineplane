const point3 = require('../../lib/point3')

module.exports = (ts) => {
  ts.test('case: distance to plane', (t) => {
    let point, plane

    point = { x: 0, y: 0, z: 0 }
    plane = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    t.equal(
      point3.distanceToPlane(point, plane),
      0,
      'trivial'
    )

    point = { x: 20, y: 20, z: 1 }
    plane = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    t.equal(
      point3.distanceToPlane(point, plane),
      1,
      'only depth matters'
    )

    t.end()
  })
}
