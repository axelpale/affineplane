const affineplane = require('../../index')
const scalar3 = affineplane.scalar3

module.exports = (ts) => {
  ts.test('case: smoke', (t) => {
    t.ok(scalar3.equal(1, 1), 'numbers equal')
    t.notOk(scalar3.equal(0, 1), 'numbers not equal')

    t.end()
  })
}
