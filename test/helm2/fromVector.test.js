const helm2 = require('../../index').helm2

module.exports = (ts) => {
  ts.test('case: happy', (t) => {
    t.deepEqual(
      helm2.fromVector({ x: 2, y: 1 }),
      helm2.fromFeatures({ translation: { x: 2, y: 1 } }),
      'should work as fromFeatures'
    )
    t.end()
  })

  ts.test('case: invalid', (t) => {
    t.throws(() => {
      helm2.fromVector()
    }, null, 'no arguments')

    t.doesNotThrow(() => {
      helm2.fromVector({ x: 1 })
    }, null, 'do not validate point')

    t.end()
  })
}
