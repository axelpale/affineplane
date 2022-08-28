const helm3 = require('../../lib/helm3')

module.exports = (ts) => {
  ts.test('case: basic rotations', (t) => {
    let helm, angle

    helm = helm3.ROT180
    angle = Math.PI // +180deg
    t.almostEqual(
      helm3.rotateBy(helm, angle),
      helm3.ROT180,
      'rotation does not affect rotating effect'
    )

    helm = helm3.IDENTITY
    angle = 0
    t.almostEqual(
      helm3.rotateBy(helm, angle),
      helm3.IDENTITY,
      'trivial zero rotation'
    )

    helm = { a: 0, b: 2, x: 1, y: 2, z: 3 }
    angle = Math.PI / 2 // +90deg
    t.almostEqual(
      helm3.rotateBy(helm, angle),
      { a: 0, b: 2, x: -2, y: 1, z: 3 },
      'only xy translation should be rotated'
    )

    t.end()
  })
}
