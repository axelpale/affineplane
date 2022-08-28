const line3 = require('../../lib/line3')

module.exports = (ts) => {
  ts.test('case: valid line3', (t) => {
    t.ok(line3.validate({
      origin: { x: 0, y: 0, z: 0 },
      span: { x: 1, y: 0, z: 0 }
    }))
    t.ok(line3.validate({
      origin: { x: 0, y: 1, z: 0 },
      span: { x: 1, y: 0, z: 0 },
      foo: 'bar'
    }), 'allow additional props')

    t.end()
  })

  ts.test('case: invalid line3', (t) => {
    t.notOk(line3.validate(null), 'detect null')
    t.notOk(line3.validate(3), 'detect number')
    t.notOk(line3.validate({}), 'detect empty object')

    t.notOk(
      line3.validate({ origin: { x: 0, y: 0, z: 0 } }),
      'detect missing prop')

    t.notOk(
      line3.validate({ origin: { x: 0 }, span: { x: 1, y: 0, z: 0 } }),
      'detect invalid origin'
    )

    t.notOk(
      line3.validate({
        origin: { x: 0, y: 0, z: NaN },
        span: { x: 1, y: 0, z: 0 }
      }),
      'detect NaN in origin'
    )

    t.notOk(
      line3.validate({
        origin: { x: 1, y: 1, z: 1 },
        span: { x: 0, y: 0, z: 0 }
      }),
      'detect zero spanning vector'
    )

    t.end()
  })
}
