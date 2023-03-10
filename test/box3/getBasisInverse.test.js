const affineplane = require('../../index')
const box3 = affineplane.box3

module.exports = (ts) => {
  ts.test('case: basic getBasisInverse', (t) => {
    const b = { a: 1, b: 0, x: 1, y: 2, z: 3, w: 3, h: 4, d: 5 }
    t.almostEqualBasis(
      box3.getBasisInverse(b),
      { a: 1, b: 0, x: -1, y: -2, z: -3 },
      'should do negated translation'
    )

    const bb = { a: 0, b: 1, x: 1, y: 2, z: 3, w: 3, h: 4, d: 5 }
    t.almostEqualBasis(
      box3.getBasisInverse(bb),
      { a: 0, b: -1, x: -2, y: 1, z: -3 },
      'should do inverted rotation'
    )

    t.end()
  })
}
