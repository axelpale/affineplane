const affineplane = require('../../index')
const scalar3 = affineplane.scalar3

module.exports = (ts) => {
  ts.test('case: smoke', (t) => {
    t.equal(scalar3.create(-3), -3, 'should allow negative value')

    t.end()
  })
}
