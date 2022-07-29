const affineplane = require('../../index')
const vector = affineplane.vec2

module.exports = (ts) => {
  ts.test('case: ensure different identity', (t) => {
    const vec = { x: 0, y: 0 }
    t.notEqual(
      vector.copy(vec),
      vec
    )

    t.end()
  })
}
