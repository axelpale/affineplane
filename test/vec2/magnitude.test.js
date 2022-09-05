const affineplane = require('../../index')
const vec2 = affineplane.vec2

module.exports = (ts) => {
  ts.test('case: basic magnitude', (t) => {
    t.equal(
      vec2.magnitude({ x: 0, y: 0 }),
      0,
      'zero vector'
    )

    t.almostEqual(
      vec2.magnitude({ x: 3, y: 4 }),
      5,
      'simple magnitude'
    )

    t.end()
  })
}
