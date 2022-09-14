const affineplane = require('../../index')
const vec2 = affineplane.vec2

module.exports = (ts) => {
  ts.test('case: basic independency', (t) => {
    t.false(
      vec2.independent(
        { x: 0, y: 0, z: 0 },
        { x: 0, y: 0, z: 0 }
      ),
      'zero vectors dependent'
    )

    t.true(
      vec2.independent(
        { x: 1, y: 1, z: 1 },
        { x: 2, y: 1, z: 1 }
      ),
      'vectors have different direction'
    )

    t.false(
      vec2.independent(
        { x: -1, y: -1, z: -1 },
        { x: 2, y: 2, z: 2 }
      ),
      'vectors have opposite direction'
    )

    t.end()
  })
}
