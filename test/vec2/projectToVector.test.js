const vec2 = require('../../lib/vec2')

module.exports = (ts) => {
  ts.test('case: basic vector projection', (t) => {
    t.almostEqualVector(
      vec2.projectToVector({ x: 3, y: 4 }, { x: 1, y: 0 }),
      { x: 3, y: 0 },
      'should give x component'
    )

    t.almostEqualVector(
      vec2.projectToVector({ x: 3, y: 4 }, { x: 0, y: -1 }),
      { x: 0, y: 4 },
      'should give y component'
    )

    t.almostEqualVector(
      vec2.projectToVector({ x: 3, y: 4 }, { x: 0, y: 0 }),
      { x: 0, y: 0 },
      'should deal with zero'
    )

    t.end()
  })
}
