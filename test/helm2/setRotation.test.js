const helm2 = require('../../lib/helm2')

module.exports = (ts) => {
  ts.test('case: basic rotations', (t) => {
    t.almostEqual(
      helm2.setRotation(helm2.ROT45, Math.PI / 2),
      helm2.ROT90,
      'to 90 deg'
    )

    t.almostEqual(
      helm2.setRotation(helm2.ROT45, Math.PI / 4),
      helm2.ROT45,
      'to same angle'
    )

    t.almostEqual(
      helm2.setRotation({ a: 0, b: 2, x: 2, y: 3 }, 0),
      { a: 2, b: 0, x: 2, y: 3 },
      'preserve scale and translation'
    )

    t.end()
  })
}
