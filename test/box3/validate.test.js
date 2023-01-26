const box3 = require('../../index').box3
const validate = box3.validate

module.exports = (ts) => {
  ts.test('case: various valid boxes', (t) => {
    t.true(
      validate({ a: 1, b: 0, x: 0, y: 0, z: 0, w: 0, h: 0, d: 0 }),
      'identity'
    )
    t.true(
      validate({ a: 0, b: 1, x: -2, y: -3, z: -4, w: 5, h: 6, d: 7 }),
      'values'
    )

    const leg = Math.sqrt(2) / 2
    t.true(
      validate({ a: leg, b: leg, x: 1, y: 2, z: 3, w: 4, h: 5, d: 6 }),
      '45 deg'
    )

    t.end()
  })

  ts.test('case: various invalid boxes', (t) => {
    t.false(
      validate({ a: 0, b: 0, x: 0, y: 0, z: 0, w: 0, h: 0, d: 0 }),
      'detect zero'
    )
    t.false(validate({}), 'no properties')
    t.false(
      validate({ a: 1, b: 0, x: 0, y: 0, z: 0, w: -3, h: 2, d: 1 }),
      'negative size'
    )
    t.false(
      validate({ a: 1, b: 1, x: 0, y: 0, z: 0, w: 0, h: 0, d: 0 }),
      'invalid orientation'
    )

    t.end()
  })
}
