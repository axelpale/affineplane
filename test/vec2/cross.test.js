const affineplane = require('../../index')
const vec2 = affineplane.vec2

module.exports = (ts) => {
  ts.test('case: zeroes and ones', (t) => {
    t.equal(
      vec2.cross(
        { x: 0, y: 0 },
        { x: 0, y: 0 }
      ),
      0,
      'zero vectors'
    )

    t.equal(
      vec2.cross(
        { x: 1, y: 1 },
        { x: 1, y: 1 }
      ),
      0,
      'parallel vectors'
    )

    t.equal(
      vec2.cross(
        { x: 1, y: 0 },
        { x: 0, y: 1 }
      ),
      1,
      'square'
    )

    t.end()
  })
}
