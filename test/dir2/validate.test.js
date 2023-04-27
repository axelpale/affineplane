const dir2 = require('../../lib/dir2')

module.exports = (ts) => {
  ts.test('case: valid direction', (t) => {
    t.ok(dir2.validate({ x: 0, y: 1 }))
    t.ok(dir2.validate({ x: 1 / Math.sqrt(2), y: 1 / Math.sqrt(2) }))
    t.ok(dir2.validate({ x: 0, y: 1, z: 2 }), 'allow additional props')

    t.end()
  })

  ts.test('case: invalid direction', (t) => {
    t.notOk(dir2.validate(null), 'detect null')
    t.notOk(dir2.validate({}), 'detect empty object')
    t.notOk(dir2.validate({ x: 0 }), 'detect missing prop')
    t.notOk(dir2.validate({ x: 0, y: '1' }), 'detect string value')
    t.notOk(dir2.validate({ x: 0, y: NaN }), 'detect NaN')
    t.notOk(dir2.validate({ x: 0, y: 1.1 }), 'detect invalid length')

    t.end()
  })
}
