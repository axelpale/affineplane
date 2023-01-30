const helm2 = require('../../index').helm2

module.exports = (ts) => {
  ts.test('case: happy', (t) => {
    t.deepEqual(
      helm2.fromFeatures({ dilation: 2 }),
      helm2.X2,
      'recreate X2'
    )

    t.almostEqual(
      helm2.fromFeatures({
        dilation: Math.sqrt(2),
        rotation: Math.PI / 4,
        translation: { x: 1, y: 1 }
      }),
      helm2.UNIT,
      'recreate UNIT'
    )

    t.deepEqual(
      helm2.fromFeatures(),
      helm2.IDENTITY,
      'default to identity'
    )

    t.end()
  })
}
