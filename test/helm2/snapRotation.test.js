const helm2 = require('../../lib/helm2')

module.exports = (ts) => {
  ts.test('case: basic rotation snapping', (t) => {
    let tr

    tr = helm2.addRotation(helm2.I, 0.01)
    t.almostEqual(
      helm2.snapRotation(tr),
      { a: 1, b: 0, x: 0, y: 0 },
      'to identity'
    )

    t.almostEqual(
      helm2.snapRotation(helm2.ROT90),
      helm2.ROT90,
      'to same angle'
    )

    tr = helm2.addRotation({ a: 2, b: 0, x: 2, y: 3 }, Math.PI / 3)
    t.almostEqual(
      helm2.snapRotation(tr),
      { a: 0, b: 2, x: 2, y: 3 },
      'over 45deg, preserve translation and scale'
    )

    t.end()
  })
}
