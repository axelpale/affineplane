const helm3 = require('../../lib/helm3')

module.exports = (ts) => {
  ts.test('case: basic scalings', (t) => {
    t.equal(helm3.getDilation(helm3.IDENTITY), 1)
    t.equal(helm3.getDilation(helm3.HALF), 0.5)
    t.equal(helm3.getDilation(helm3.X2), 2)

    t.end()
  })
}
