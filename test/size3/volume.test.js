const affineplane = require('../../index')
const size3 = affineplane.size3

module.exports = (ts) => {
  ts.test('case: basic volume', (t) => {
    const sz = size3.create(1, 2, 3)
    t.equal(size3.volume(sz), 6, 'should be absolute value')

    const sz0 = size3.create(1, 0, 3)
    t.equal(size3.volume(sz0), 0, 'should allow zero')

    t.end()
  })
}
