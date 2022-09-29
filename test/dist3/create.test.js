const affineplane = require('../../index')
const dist3 = affineplane.dist3

module.exports = (ts) => {
  ts.test('case: basic', (t) => {
    t.equal(dist3.create(-3), 3, 'should be absolute value')
    t.equal(dist3.create(0), 0, 'should allow zero')

    t.end()
  })
}
