const affineplane = require('../../index') // should be exported
const scalar2 = affineplane.scalar2

module.exports = (ts) => {
  ts.test('case: smoke', (t) => {
    t.true(scalar2.validate(0), 'zero is valid')
    t.false(scalar2.validate(NaN), 'detect NaN')

    t.end()
  })
}
