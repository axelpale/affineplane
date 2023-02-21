const affineplane = require('../../index')
const scalar2 = affineplane.scalar2

module.exports = (ts) => {
  ts.test('case: smoke', (t) => {
    t.equal(scalar2.create(-3), -3, 'should allow negative value')

    t.end()
  })
}
