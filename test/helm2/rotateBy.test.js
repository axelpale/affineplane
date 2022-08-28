const helm2 = require('../../lib/helm2')

module.exports = (ts) => {
  ts.test('case: basic rotations', (t) => {
    let helm, angle

    helm = helm2.ROT180
    angle = Math.PI // +180deg
    t.almostEqual(
      helm2.rotateBy(helm, angle),
      helm2.ROT180,
      'rotation does not affect rotating effect'
    )

    helm = helm2.IDENTITY
    angle = 0
    t.almostEqual(
      helm2.rotateBy(helm, angle),
      helm2.IDENTITY,
      'trivial zero rotation'
    )

    helm = { a: 0, b: 2, x: 2, y: 2 }
    angle = Math.PI / 2 // +90deg
    t.almostEqual(
      helm2.rotateBy(helm, angle),
      { a: 0, b: 2, x: -2, y: 2 },
      'only translation should be rotated'
    )

    t.end()
  })
}
