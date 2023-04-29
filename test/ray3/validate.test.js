const ray3 = require('../../lib/ray3')

module.exports = (ts) => {
  ts.test('case: valid ray', (t) => {
    t.ok(
      ray3.validate({ x: 0, y: 1, z: 2, dx: 0, dy: 1, dz: 2 }),
      'should be valid'
    )
    t.ok(
      ray3.validate({ x: 0, y: 1, z: 2, dx: 0, dy: 1, dz: 2, r: 3 }),
      'allow additional props'
    )

    t.end()
  })

  ts.test('case: invalid ray', (t) => {
    t.notOk(ray3.validate(null), 'detect null')
    t.notOk(ray3.validate({}), 'detect empty object')
    t.notOk(
      ray3.validate({ x: 0, y: 0, z: 0, dx: 0, dy: 0 }),
      'detect missing prop'
    )
    t.notOk(
      ray3.validate({ x: 0, y: 0, z: 0, dx: 0, dy: 0, dz: '1' }),
      'detect string value'
    )
    t.notOk(
      ray3.validate({ x: 0, y: 0, z: NaN, dx: 0, dy: 0, dz: 0 }),
      'detect NaN'
    )

    t.end()
  })
}
