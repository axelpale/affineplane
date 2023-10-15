const affineplane = require('../../index')
const orient2 = affineplane.orient2

module.exports = (ts) => {
  ts.test('case: basic fromPolar', (t) => {
    t.almostEqualOrient(
      orient2.fromPolar(0),
      { a: 1, b: 0 },
      'zero angle'
    )

    t.almostEqualOrient(
      orient2.fromPolar(Math.PI / 2),
      { a: 0, b: 1 },
      'angle of +90deg'
    )

    t.end()
  })
}
