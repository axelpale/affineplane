const affineplane = require('../../index')
const box2 = affineplane.box2

module.exports = (ts) => {
  ts.test('case: basic getBasis', (t) => {
    const b = { a: 1, b: 0, x: 1, y: 2, w: 3, h: 4 }
    t.deepEqual(
      box2.getBasis(b),
      { a: 1, b: 0, x: 1, y: 2 },
      'should be a plane'
    )

    const bb = { a: 0, b: 1, x: 1, y: 2, w: 3, h: 4 }
    t.deepEqual(
      box2.getBasis(bb),
      { a: 0, b: 1, x: 1, y: 2 },
      'rotated plane'
    )

    t.end()
  })
}
