const helm3 = require('../../lib/helm3')

module.exports = (ts) => {
  ts.test('case: basic rotations', (t) => {
    t.almostEqual(
      helm3.setRotation(helm3.ROT45, Math.PI / 2),
      helm3.ROT90,
      'to 90 deg'
    )

    t.almostEqual(
      helm3.setRotation(helm3.ROT45, Math.PI / 4),
      helm3.ROT45,
      'to same angle'
    )

    t.almostEqual(
      helm3.setRotation({ a: 0, b: 2, x: 2, y: 3, z: 4 }, 0),
      { a: 2, b: 0, x: 2, y: 3, z: 4 },
      'preserve scale and translation'
    )

    t.end()
  })
}
