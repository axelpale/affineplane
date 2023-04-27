const vec4 = require('../../lib/vec4')

module.exports = (ts) => {
  ts.test('case: valid vector', (t) => {
    t.ok(vec4.validate({ x: 0, y: 1, z: 1, w: 1 }), 'allow valid')
    t.ok(
      vec4.validate({ x: 0, y: 1, z: 2, w: 3, v: 4 }),
      'allow additional props'
    )

    t.end()
  })

  ts.test('case: invalid vector', (t) => {
    t.notOk(vec4.validate(null), 'detect null')
    t.notOk(vec4.validate({}), 'detect empty object')
    t.notOk(vec4.validate({ x: 0, y: 0, z: 0 }), 'detect missing prop')
    t.notOk(vec4.validate({ x: 0, y: 0, z: 0, w: '1' }), 'detect string value')
    t.notOk(vec4.validate({ x: 0, y: 0, z: 0, w: NaN }), 'detect NaN')

    t.end()
  })
}
