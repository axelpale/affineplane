const affineplane = require('../../index')
const dist2 = affineplane.dist2

module.exports = (ts) => {
  ts.test('case: basic', (t) => {
    t.equal(dist2.create(-3), 3, 'should be absolute value')
    t.equal(dist2.create(0), 0, 'should allow zero')

    t.end()
  })
}
