const plane3 = require('../../lib/plane3')
const helm3 = require('../../lib/helm3')

module.exports = (ts) => {
  ts.test('case: basic rotations', (t) => {
    let plane, center, angle

    plane = { a: -1, b: 0, x: 0, y: 0, z: 0 }
    center = { x: 0, y: 0, z: 0 }
    angle = -Math.PI
    t.almostEqual(
      plane3.rotateBy(plane, center, angle),
      helm3.IDENTITY,
      'rotation by -180 deg'
    )

    plane = helm3.IDENTITY
    center = { x: 0, y: 0, z: 100 }
    angle = 0
    t.almostEqual(
      plane3.rotateBy(plane, center, angle),
      helm3.IDENTITY,
      'rotation by 0 deg, center.z no effect'
    )

    plane = helm3.IDENTITY
    center = { x: 100, y: 100 }
    angle = Math.PI
    t.almostEqual(
      plane3.rotateBy(plane, center, angle),
      { a: -1, b: 0, x: 200, y: 200, z: 0 },
      'around non-trivial 2D center'
    )

    t.end()
  })
}
