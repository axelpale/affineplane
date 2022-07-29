const vector = require('../../lib/vec2')

module.exports = (ts) => {
  ts.test('case: valid vector', (t) => {
    t.ok(vector.validate({ x: 0, y: 1 }))
    t.ok(vector.validate({ x: 0, y: 1, z: 2 }), 'allow additional props')

    t.end()
  })

  ts.test('case: invalid vector', (t) => {
    t.notOk(vector.validate(null), 'detect null')
    t.notOk(vector.validate({}), 'detect empty object')
    t.notOk(vector.validate({ x: 0 }), 'detect missing prop')
    t.notOk(vector.validate({ x: 0, y: '1' }), 'detect string value')
    t.notOk(vector.validate({ x: 0, y: NaN }), 'detect NaN')

    t.end()
  })
}
