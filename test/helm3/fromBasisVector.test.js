const helm2z = require('../../index').helm2z

module.exports = (ts) => {
  ts.test('case: happy', (t) => {
    t.almostEqual(
      helm2z.fromBasisVector({ x: 1, y: 1 }),
      helm2z.fromFeatures({
        dilation: Math.sqrt(2),
        rotation: Math.PI / 4
      }),
      'should match fromFeatures'
    )
    t.end()
  })

  ts.test('case: invalid', (t) => {
    t.throws(() => {
      helm2z.fromBasisVector()
    }, null, 'no arguments')

    t.doesNotThrow(() => {
      helm2z.fromBasisVector({ x: 1 })
    }, null, 'do not validate point')

    t.end()
  })
}
