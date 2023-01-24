const size2 = require('../../lib/size2')

module.exports = (ts) => {
  ts.test('case: valid size2', (t) => {
    t.ok(size2.validate({ w: 0, h: 1 }))
    t.ok(size2.validate({ w: 0, h: 1, d: 2 }), 'allow additional props')

    t.end()
  })

  ts.test('case: invalid size2', (t) => {
    t.notOk(size2.validate(null), 'detect null')
    t.notOk(size2.validate({}), 'detect empty object')
    t.notOk(size2.validate({ w: 0 }), 'detect missing prop')
    t.notOk(size2.validate({ w: 0, h: '1' }), 'detect string value')
    t.notOk(size2.validate({ w: 0, h: NaN }), 'detect NaN')
    t.notOk(size2.validate({ w: 0, h: -1 }), 'detect negative')

    t.end()
  })
}
