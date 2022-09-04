const affineplane = require('../../index')
const vec3 = affineplane.vec3

module.exports = (ts) => {
  ts.test('case: basic unit vector', (t) => {
    t.almostEqual(
      vec3.unit({ x: 0, y: 0, z: 0 }),
      { x: 1, y: 0, z: 0 },
      'zero vector towards x'
    )

    t.almostEqual(
      vec3.unit({ x: 3, y: 4, z: 12 }), // orig.len. 13
      { x: 3 / 13, y: 4 / 13, z: 12 / 13 },
      'direction does not change'
    )

    t.end()
  })
}
