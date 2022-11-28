const vec3 = require('../../lib/vec3')

module.exports = (ts) => {
  ts.test('case: basic vector projection', (t) => {
    t.almostEqualVector(
      vec3.projectToVector({ x: 3, y: 4, z: 5 }, { x: 1, y: 0, z: 0 }),
      { x: 3, y: 0, z: 0 },
      'should give x component'
    )

    t.almostEqualVector(
      vec3.projectToVector({ x: 3, y: 4, z: 5 }, { x: 0, y: 0, z: -2 }),
      { x: 0, y: 0, z: 5 },
      'should give z component'
    )

    t.almostEqualVector(
      vec3.projectToVector({ x: 3, y: 4, z: 5 }, { x: 0, y: 0, z: 0 }),
      { x: 0, y: 0, z: 0 },
      'should tolerate zero'
    )

    t.end()
  })
}
