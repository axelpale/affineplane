const affineplane = require('../../index')
const rect3 = affineplane.rect3

module.exports = (ts) => {
  ts.test('case: basic area', (t) => {
    const r = {
      basis: { a: 1, b: 0, x: 0, y: 0, z: 2 },
      size: { w: 10, h: 6 }
    }

    t.equal(
      rect3.getArea(r),
      60,
      'should have correct area'
    )

    const rr = {
      basis: { a: 2, b: 0, x: 200, y: 200, z: 2 },
      size: { w: 10, h: 6 }
    }

    t.equal(
      rect3.getArea(rr),
      240,
      'squared scale and translation should not affect'
    )

    t.end()
  })
}
