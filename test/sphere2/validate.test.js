const sphere2 = require('../../lib/sphere2')

module.exports = (ts) => {
  ts.test('case: valid sphere2', (t) => {
    t.ok(sphere2.validate({ x: 0, y: 1, r: 1 }))
    t.ok(sphere2.validate({ x: 0, y: 1, r: 1, z: 2 }), 'allow additional props')

    t.end()
  })

  ts.test('case: invalid sphere2', (t) => {
    t.notOk(sphere2.validate(null), 'detect null')
    t.notOk(sphere2.validate({}), 'detect empty object')
    t.notOk(sphere2.validate({ x: 0, y: 0 }), 'detect missing prop')
    t.notOk(sphere2.validate({ x: 0, y: '1', r: 1 }), 'detect string value')
    t.notOk(sphere2.validate({ x: 0, y: 0, r: NaN }), 'detect NaN')

    t.end()
  })
}
