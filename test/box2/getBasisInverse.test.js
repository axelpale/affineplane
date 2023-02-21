const affineplane = require('../../index')
const box2 = affineplane.box2

module.exports = (ts) => {
  ts.test('case: basic getBasisInverse', (t) => {
    const b = { a: 1, b: 0, x: 1, y: 2, w: 3, h: 4 }
    t.almostEqualBasis(
      box2.getBasisInverse(b),
      { a: 1, b: 0, x: -1, y: -2 },
      'should do negated translation'
    )

    const bb = { a: 0, b: 1, x: 1, y: 2, w: 3, h: 4 }
    t.almostEqualBasis(
      box2.getBasisInverse(bb),
      { a: 0, b: -1, x: -2, y: 1 },
      'should do inverted rotation'
    )

    t.end()
  })
}
