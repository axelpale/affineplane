const affineplane = require('../../index')
const box2 = affineplane.box2

module.exports = (ts) => {
  ts.test('case: basic area', (t) => {
    const b = { a: 1, b: 0, x: 0, y: 0, w: 10, h: 6 }

    t.equal(
      box2.getArea(b),
      60,
      'should have correct area'
    )

    const bb = { a: 2, b: 0, x: 200, y: 200, w: 10, h: 6 }

    t.equal(
      box2.getArea(bb),
      60,
      'scale should not affect'
    )

    t.end()
  })
}
