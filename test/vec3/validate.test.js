const vec3 = require('../../lib/vec3')

module.exports = (ts) => {
  ts.test('case: valid vector', (t) => {
    t.ok(vec3.validate({ x: 0, y: 1, z: 1 }))
    t.ok(vec3.validate({ x: 0, y: 1, z: 2, w: 3 }), 'allow additional props')

    t.end()
  })

  ts.test('case: invalid vector', (t) => {
    t.notOk(vec3.validate(null), 'detect null')
    t.notOk(vec3.validate({}), 'detect empty object')
    t.notOk(vec3.validate({ x: 0, y: 0 }), 'detect missing prop')
    t.notOk(vec3.validate({ x: 0, y: 0, z: '1' }), 'detect string value')
    t.notOk(vec3.validate({ x: 0, y: 0, z: NaN }), 'detect NaN')

    t.end()
  })
}
