const affineplane = require('../../index') // should be exported
const dist3 = affineplane.dist3

module.exports = (ts) => {
  ts.test('case: smoke', (t) => {
    t.true(dist3.validate(1), 'one is valid')
    t.false(dist3.validate(-1), 'negative is not valid')

    t.end()
  })
}
