const circle3 = require('../../lib/circle3')

module.exports = (ts) => {
  ts.test('case: valid circle3', (t) => {
    t.ok(circle3.validate({ x: 0, y: 1, z: 0, r: 1 }))
    t.ok(
      circle3.validate({ x: 0, y: 1, z: 0, r: 1, a: 2 }),
      'allow additional props'
    )

    t.end()
  })

  ts.test('case: invalid circle3', (t) => {
    t.notOk(circle3.validate(null), 'detect null')
    t.notOk(circle3.validate({}), 'detect empty object')
    t.notOk(circle3.validate({ x: 0, y: 0, z: 0 }), 'detect missing prop')
    t.notOk(
      circle3.validate({ x: 0, y: 0, z: '1', r: 1 }),
      'detect string value'
    )
    t.notOk(circle3.validate({ x: 0, y: 0, z: NaN, r: 1 }), 'detect NaN')

    t.end()
  })
}
