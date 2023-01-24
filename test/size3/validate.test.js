const size3 = require('../../lib/size3')

module.exports = (ts) => {
  ts.test('case: valid size3', (t) => {
    t.ok(size3.validate({ w: 0, h: 1, d: 2 }))
    t.ok(size3.validate({ w: 0, h: 1, d: 2, z: 3 }), 'allow additional props')

    t.end()
  })

  ts.test('case: invalid size3', (t) => {
    t.notOk(size3.validate(null), 'detect null')
    t.notOk(size3.validate({}), 'detect empty object')
    t.notOk(size3.validate({ w: 0, h: 1 }), 'detect missing prop')
    t.notOk(size3.validate({ w: 0, h: 1, d: '2' }), 'detect string value')
    t.notOk(size3.validate({ w: 0, h: 1, d: NaN }), 'detect NaN')
    t.notOk(size3.validate({ w: 0, h: 1, d: -2 }), 'detect negative')

    t.end()
  })
}
