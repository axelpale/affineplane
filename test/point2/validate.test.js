const point2 = require('../../lib/point2')

module.exports = (ts) => {
  ts.test('case: valid point2', (t) => {
    t.ok(point2.validate({ x: 0, y: 1 }))
    t.ok(point2.validate({ x: 0, y: 1, z: 2 }), 'allow additional props')

    t.end()
  })

  ts.test('case: invalid point2', (t) => {
    t.notOk(point2.validate(null), 'detect null')
    t.notOk(point2.validate({}), 'detect empty object')
    t.notOk(point2.validate({ x: 0 }), 'detect missing prop')
    t.notOk(point2.validate({ x: 0, y: '1' }), 'detect string value')
    t.notOk(point2.validate({ x: 0, y: NaN }), 'detect NaN')

    t.end()
  })
}
