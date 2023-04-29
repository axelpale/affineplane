const point3 = require('../../lib/point3')

module.exports = (ts) => {
  ts.test('case: distance to line', (t) => {
    let point, line

    point = { x: 0, y: 0, z: 0 }
    line = { origin: { x: 0, y: 0, z: 0 }, span: { x: 1, y: 0, z: 0 } }
    t.equal(
      point3.distanceToLine(point, line),
      0,
      'trivial zero distance'
    )

    point = { x: 0, y: 1, z: 0 }
    line = { origin: { x: 0, y: 0, z: 0 }, span: { x: 1, y: 0, z: 0 } }
    t.equal(
      point3.distanceToLine(point, line),
      1,
      'simple distance along y'
    )

    point = { x: 5, y: 5, z: 0 }
    line = { origin: { x: 10, y: 0, z: 0 }, span: { x: 0, y: 2, z: 0 } }
    t.almostEqual(
      point3.distanceToLine(point, line),
      5,
      'distance along x'
    )

    point = { x: 5, y: 5, z: 0 }
    line = { origin: { x: 0, y: 0, z: 2 }, span: { x: 2, y: 2, z: 0 } }
    t.almostEqual(
      point3.distanceToLine(point, line),
      2,
      'distance along z'
    )

    t.end()
  })
}
