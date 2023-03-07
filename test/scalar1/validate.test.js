const affineplane = require('../../index') // should be exported
const scalar1 = affineplane.scalar1

module.exports = (ts) => {
  ts.test('case: basic scalar validation', (t) => {
    t.true(scalar1.validate(0), 'zero is valid')
    t.true(scalar1.validate(-1), 'negative one is valid')
    t.false(scalar1.validate(null), 'null should not be valid')
    t.false(scalar1.validate({}), 'empty object should not be valid')
    t.false(scalar1.validate(NaN), 'NaN should not be valid')

    t.end()
  })
}
