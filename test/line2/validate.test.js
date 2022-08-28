const line2 = require('../../lib/line2')

module.exports = (ts) => {
  ts.test('case: valid line2', (t) => {
    t.ok(line2.validate({
      origin: { x: 0, y: 0 },
      span: { x: 1, y: 0 }
    }))
    t.ok(line2.validate({
      origin: { x: 0, y: 1 },
      span: { x: 1, y: 0 },
      foo: 'bar'
    }), 'allow additional props')

    t.end()
  })

  ts.test('case: invalid line2', (t) => {
    t.notOk(line2.validate(null), 'detect null')
    t.notOk(line2.validate(3), 'detect number')
    t.notOk(line2.validate({}), 'detect empty object')
    t.notOk(line2.validate({ origin: { x: 0, y: 0 } }), 'detect missing prop')

    t.notOk(
      line2.validate({ origin: { x: 0 }, span: { x: 1, y: 0 } }),
      'detect invalid origin'
    )

    t.notOk(
      line2.validate({ origin: { x: 0, y: NaN }, span: { x: 1, y: 0 } }),
      'detect NaN as origin.y'
    )

    t.notOk(
      line2.validate({ origin: { x: 1, y: 1 }, span: { x: 0, y: 0 } }),
      'detect zero spanning vector'
    )

    t.end()
  })
}
