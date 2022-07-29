const point3 = require('../../lib/point3')

module.exports = (ts) => {
  ts.test('case: valid point3', (t) => {
    t.ok(point3.validate({ x: 0, y: 1, z: 2 }))
    t.ok(point3.validate({ x: 0, y: 1, z: 2, r: 2 }), 'allow additional props')

    t.end()
  })

  ts.test('case: invalid point3', (t) => {
    t.notOk(point3.validate(null), 'detect null')
    t.notOk(point3.validate({}), 'detect empty object')
    t.notOk(point3.validate({ x: 0, y: 1 }), 'detect missing prop')
    t.notOk(point3.validate({ x: 0, y: 1, z: '2' }), 'detect string value')
    t.notOk(point3.validate({ x: 0, y: 1, z: NaN }), 'detect NaN')

    t.end()
  })
}
