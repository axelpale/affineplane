const helm2 = require('../../index').helm2

module.exports = (ts) => {
  ts.test('case: happy', (t) => {
    t.almostEqual(
      helm2.fromBasisVector({ x: 1, y: 1 }),
      helm2.fromFeatures({
        dilation: Math.sqrt(2),
        rotation: Math.PI / 4
      }),
      'should match fromFeatures'
    )
    t.end()
  })

  ts.test('case: invalid', (t) => {
    t.throws(() => {
      helm2.fromBasisVector()
    }, null, 'no arguments')

    t.doesNotThrow(() => {
      helm2.fromBasisVector({ x: 1 })
    }, null, 'do not validate point')

    t.end()
  })
}
