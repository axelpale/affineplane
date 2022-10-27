const affineplane = require('../../index')
const rect3 = affineplane.rect3

module.exports = (ts) => {
  ts.test('case: basic create', (t) => {
    const basis = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    const size = { w: 10, h: 6 }
    t.deepEqual(
      rect3.create(basis, size),
      { basis, size },
      'should have correct structure'
    )

    t.end()
  })
}
