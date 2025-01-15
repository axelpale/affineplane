const affineplane = require('../../index')
const orient2 = affineplane.orient2

module.exports = (ts) => {
  ts.test('case: strict equivalence', (t) => {
    t.ok(
      orient2.equal({ a: 0, b: 1 }, { a: 0, b: 1 }),
      'should be equal'
    )
    t.notOk(
      orient2.equal({ a: 0, b: 0 }, { a: 0, b: 1 }),
      'should not be equal in b'
    )
    t.notOk(
      orient2.equal({ a: 1, b: 0 }, { a: 0, b: 0 }),
      'should not be equal in a'
    )
    t.notOk(
      orient2.equal({ a: 1, b: 0 }, { a: 0.99999999, b: 0 }),
      'should not allow slight difference'
    )

    t.end()
  })
}
