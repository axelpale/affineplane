const affineplane = require('../../index') // should be exported
const dist2 = affineplane.dist2

module.exports = (ts) => {
  ts.test('case: basic distance validation', (t) => {
    t.true(dist2.validate(0), 'zero is valid')
    t.true(dist2.validate(1), 'one is valid')
    t.false(dist2.validate(-1), 'negative is not valid')
    t.false(dist2.validate(null), 'null should not be valid')
    t.false(dist2.validate({}), 'empty object should not be valid')
    t.false(dist2.validate(NaN), 'NaN should not be valid')

    t.end()
  })
}
