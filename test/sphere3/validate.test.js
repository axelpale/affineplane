const sphere3 = require('../../lib/sphere3')

module.exports = (ts) => {
  ts.test('case: valid sphere3', (t) => {
    t.ok(sphere3.validate({ x: 0, y: 1, z: 0, r: 1 }))
    t.ok(
      sphere3.validate({ x: 0, y: 1, z: 0, r: 1, a: 2 }),
      'allow additional props'
    )

    t.end()
  })

  ts.test('case: invalid sphere3', (t) => {
    t.notOk(sphere3.validate(null), 'detect null')
    t.notOk(sphere3.validate({}), 'detect empty object')
    t.notOk(sphere3.validate({ x: 0, y: 0, z: 0 }), 'detect missing prop')
    t.notOk(
      sphere3.validate({ x: 0, y: 0, z: '1', r: 1 }),
      'detect string value'
    )
    t.notOk(sphere3.validate({ x: 0, y: 0, z: NaN, r: 1 }), 'detect NaN')

    t.end()
  })
}
