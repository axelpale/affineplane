const sphere3 = require('../../lib/sphere3')
const PI = Math.PI

module.exports = (ts) => {
  ts.test('case: basic rotate by z', (t) => {
    let sphere, origin

    sphere = { x: 0, y: 0, z: 0, r: 0 }
    origin = { x: 0, y: 0, z: 0 }
    t.deepEqual(
      sphere3.rotateBy(sphere, origin, 0),
      { x: 0, y: 0, z: 0, r: 0 },
      'trivial zero'
    )

    sphere = { x: 0, y: 0, z: 2, r: 1 }
    origin = { x: 0, y: 0, z: 1 }
    t.almostEqualSphere(
      sphere3.rotateBy(sphere, origin, PI),
      { x: 0, y: 0, z: 2, r: 1 },
      'should rotate around z axis, same origin'
    )

    sphere = { x: 0, y: 0, z: 2, r: 1 }
    origin = { x: 0, y: 2, z: 1 }
    t.almostEqualSphere(
      sphere3.rotateBy(sphere, origin, PI),
      { x: 0, y: 4, z: 2, r: 1 },
      'should rotate around z axis'
    )

    t.end()
  })
}
