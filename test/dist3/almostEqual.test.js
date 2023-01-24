const affineplane = require('../../index')
const dist3 = affineplane.dist3

module.exports = (ts) => {
  ts.test('case: basic equivalence', (t) => {
    t.ok(dist3.equal(0, 0), 'strict equal')
    t.notOk(dist3.equal(-2, 2), 'not strict equal')

    t.ok(dist3.almostEqual(0, 0), 'zero diff')
    t.notOk(dist3.almostEqual(0, 1), 'over tolerance')
    t.ok(dist3.almostEqual(0, 1, 2), 'below tolerance')

    t.end()
  })
}
