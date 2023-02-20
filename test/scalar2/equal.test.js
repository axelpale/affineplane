const affineplane = require('../../index')
const scalar2 = affineplane.scalar2

module.exports = (ts) => {
  ts.test('case: smoke', (t) => {
    t.ok(scalar2.equal(1, 1), 'numbers equal')
    t.notOk(scalar2.equal(0, 1), 'numbers not equal')

    t.end()
  })
}
