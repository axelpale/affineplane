const helm3 = require('../../lib/helm3')

module.exports = (ts) => {
  ts.test('case: basic', (t) => {
    t.true(helm3.validate({ a: 1, b: 2, x: 3, y: 4, z: 5 }), 'valid')
    t.true(helm3.validate({ a: 1, b: 0, x: 0, y: 0, z: 0, foo: 0 }),
      'allow additional props')

    t.false(helm3.validate(null), 'null is not valid')
    t.false(helm3.validate({}), 'empty object not valid')
    t.false(helm3.validate({ a: 0, b: 0, x: 0, y: 0, z: NaN }),
      'detect NaN')

    t.false(helm3.validate({ a: 0, b: 0, x: 0, y: 0, z: 0 }),
      'detect singular')

    t.end()
  })
}
