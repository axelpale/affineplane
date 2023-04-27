const dir3 = require('../../lib/dir3')
const isqrt3 = 1 / Math.sqrt(3)

module.exports = (ts) => {
  ts.test('case: valid direction', (t) => {
    t.ok(dir3.validate({ x: 0, y: 1, z: 0 }))
    t.ok(dir3.validate({ x: isqrt3, y: isqrt3, z: isqrt3 }))
    t.ok(dir3.validate({ x: 0, y: 1, z: 0, w: 3 }), 'allow additional props')

    t.end()
  })

  ts.test('case: invalid direction', (t) => {
    t.notOk(dir3.validate(null), 'detect null')
    t.notOk(dir3.validate({}), 'detect empty object')
    t.notOk(dir3.validate({ x: 0, y: 1 }), 'detect missing prop')
    t.notOk(dir3.validate({ x: 0, y: 0, z: '1' }), 'detect string value')
    t.notOk(dir3.validate({ x: 0, y: 1, z: NaN }), 'detect NaN')
    t.notOk(dir3.validate({ x: 0, y: 0, z: 1.1 }), 'detect invalid length')

    t.end()
  })
}
