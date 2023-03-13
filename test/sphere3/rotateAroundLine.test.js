const sphere3 = require('../../lib/sphere3')
const PI = Math.PI

module.exports = (ts) => {
  ts.test('case: basic rotate', (t) => {
    let sphere, origin, span, line

    sphere = { x: 0, y: 0, z: 0, r: 0 }
    origin = { x: 0, y: 0, z: 0 }
    span = { x: 0, y: 0, z: 0 }
    line = { origin, span }
    t.deepEqual(
      sphere3.rotateAroundLine(sphere, line, 0),
      { x: 0, y: 0, z: 0, r: 0 },
      'trivial zero'
    )

    sphere = { x: 0, y: 0, z: 2, r: 1 }
    origin = { x: 0, y: 0, z: 1 }
    span = { x: 0, y: 1, z: 0 }
    line = { origin, span }
    t.almostEqualSphere(
      sphere3.rotateAroundLine(sphere, line, PI),
      { x: 0, y: 0, z: 0, r: 1 },
      'should rotate to zero around vertical line'
    )

    t.end()
  })
}
