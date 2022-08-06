const helm3 = require('../../index').helm3

module.exports = (ts) => {
  ts.test('case: happy', (t) => {
    t.deepEqual(
      helm3.fromFeats({ scaling: 2 }),
      helm3.X2,
      'recreate X2'
    )

    t.almostEqual(
      helm3.fromFeats({
        scaling: Math.sqrt(2),
        rotation: Math.PI / 4,
        translation: { x: 1, y: 1, z: 1 }
      }),
      helm3.UNIT,
      'recreate UNIT'
    )

    t.end()
  })
}
