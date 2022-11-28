const helm3 = require('../../index').helm3

module.exports = (ts) => {
  ts.test('case: happy', (t) => {
    t.deepEqual(
      helm3.fromVector({ x: 2, y: 1, z: 3 }),
      helm3.fromFeatures({ translation: { x: 2, y: 1, z: 3 } }),
      'should work as fromFeatures'
    )

    t.deepEqual(
      helm3.fromVector({ x: 2, y: 1 }),
      { a: 1, b: 0, x: 2, y: 1, z: 0 },
      'should allow vec2'
    )

    t.end()
  })

  ts.test('case: invalid', (t) => {
    t.throws(() => {
      helm3.fromVector()
    }, null, 'no arguments')

    t.doesNotThrow(() => {
      helm3.fromVector({ x: 1 })
    }, null, 'do not validate point')

    t.end()
  })
}
