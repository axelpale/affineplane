const box2 = require('../../index').box2
const validate = box2.validate

module.exports = (ts) => {
  ts.test('case: various valid boxes', (t) => {
    t.true(validate({ a: 1, b: 0, x: 0, y: 0, w: 0, h: 0 }), 'identity')
    t.true(validate({ a: 0, b: 1, x: -2, y: -3, w: 4, h: 5 }), 'values')

    const leg = Math.sqrt(2) / 2
    t.true(validate({ a: leg, b: leg, x: 1, y: 2, w: 3, h: 4 }), '45 deg')

    t.end()
  })

  ts.test('case: various invalid boxes', (t) => {
    t.false(validate({ a: 0, b: 0, x: 0, y: 0, w: 0, h: 0 }), 'detect zero')
    t.false(validate({}), 'no properties')
    t.false(validate({ a: 1, b: 0, x: 0, y: 0, w: -3, h: 2 }), 'negative size')
    t.false(validate({ a: 1, b: 1, x: 0, y: 0, w: 0, h: 0 }), 'invalid orient')

    t.end()
  })
}
