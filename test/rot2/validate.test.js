const rot2 = require('../../index').rot2
const validate = rot2.validate

module.exports = (ts) => {
  ts.test('case: various valid rotations', (t) => {
    t.true(validate({ a: 1, b: 0 }), 'identity')
    t.true(validate({ a: 0, b: -1 }), 'minus 90 deg')

    const leg = Math.sqrt(2) / 2
    t.true(validate({ a: leg, b: leg }), 'plus 45 deg')

    t.end()
  })

  ts.test('case: various invalid rotations', (t) => {
    t.false(validate({ a: 0, b: 0 }), 'detect zero')
    t.false(validate({}), 'no properties')
    t.false(validate({ a: 0, b: '1' }), 'string property')
    t.false(validate({ a: 1, b: 1 }), 'invalid norm')

    t.end()
  })
}
