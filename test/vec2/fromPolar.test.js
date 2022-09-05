const affineplane = require('../../index')
const vec2 = affineplane.vec2

module.exports = (ts) => {
  ts.test('case: basic fromPolar', (t) => {
    t.almostEqual(
      vec2.fromPolar(2, 0),
      { x: 2, y: 0 },
      'zero angle'
    )

    t.almostEqual(
      vec2.fromPolar(2, Math.PI / 2),
      { x: 0, y: 2 },
      'angle of +90deg'
    )

    t.end()
  })
}
