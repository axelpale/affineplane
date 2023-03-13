const point3 = require('../../lib/point3')
const PI = Math.PI

module.exports = (ts) => {
  ts.test('case: basic rotate', (t) => {
    let point, origin, span, line

    point = { x: 0, y: 0, z: 0 }
    origin = { x: 0, y: 0, z: 0 }
    span = { x: 0, y: 0, z: 0 }
    line = { origin, span }
    t.deepEqual(
      point3.rotateAroundLine(point, line, 0),
      { x: 0, y: 0, z: 0 },
      'trivial zero'
    )

    point = { x: 0, y: 0, z: 2 }
    origin = { x: 0, y: 0, z: 1 }
    span = { x: 0, y: 1, z: 0 }
    line = { origin, span }
    t.almostEqualPoint(
      point3.rotateAroundLine(point, line, PI),
      { x: 0, y: 0, z: 0 },
      'should rotate to zero around vertical line'
    )

    t.end()
  })
}
