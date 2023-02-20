const affineplane = require('../../index')
const scalar1 = affineplane.scalar1

module.exports = (ts) => {
  ts.test('case: basic create', (t) => {
    t.equal(scalar1.create(-3), -3, 'should allow negative value')
    t.equal(scalar1.create(0), 0, 'should allow zero')

    t.throws(() => {
      scalar1.create(NaN)
    }, 'should detect NaN')

    t.throws(() => {
      scalar1.create('0')
    }, 'should detect string')

    t.end()
  })
}
