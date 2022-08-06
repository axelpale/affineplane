const affineplane = require('../../index')
const ortho3 = affineplane.ortho3
const vec2 = ortho3.vec2
const UNIT = affineplane.helm3.UNIT

module.exports = (ts) => {
  ts.test('case: basic', (t) => {
    t.deepEqual(
      vec2(UNIT, { x: 0, y: 0 }),
      { x: 0, y: 0 },
      'trivial zero vector'
    )

    t.almostEqual(
      vec2(UNIT, { x: 1, y: 0 }),
      { x: 1, y: 1 },
      'basis vector'
    )

    t.end()
  })

}
