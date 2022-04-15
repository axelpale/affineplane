const tran2 = require('../../index').tran2
const validate = tran2.validate

module.exports = (ts) => {
  ts.test('case: various valid transforms', (t) => {
    t.true(validate({
      a: 1,
      b: 2,
      x: 3,
      y: 4
    }))

    t.true(validate(tran2.HALF))
    t.true(validate(tran2.X2))
    t.true(validate(tran2.ROT45))
    t.true(validate(tran2.ROT180))

    t.end()
  })

  ts.test('case: various invalid transforms', (t) => {
    t.false(validate({
      a: 0,
      b: 0,
      x: 0,
      y: 0
    }), 'scale zero')

    t.false(validate({}), 'no properties')

    t.false(validate({
      a: 1,
      b: 2,
      x: 3,
      y: '4'
    }), 'string property')

    t.false(validate({
      a: 1,
      b: 2,
      x: 3
    }), 'missing property')

    t.end()
  })
}
