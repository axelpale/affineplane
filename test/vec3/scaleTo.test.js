const affineplane = require('../../index')
const vec3 = affineplane.vec3

module.exports = (ts) => {
  ts.test('case: basic scaling', (t) => {
    t.almostEqual(
      vec3.scaleTo({ x: 0, y: 0, z: 0 }, 2),
      { x: 0, y: 0, z: 0 },
      'zero vector cannot be scaled to length'
    )

    t.almostEqual(
      vec3.scaleTo({ x: 4, y: -3, z: 12 }, 26), // orig.len. 13
      { x: 8, y: -6, z: 24 },
      'direction does not change'
    )

    t.almostEqual(
      vec3.scaleTo({ x: 1, y: -1, z: 1 }, 0),
      { x: 0, y: 0, z: 0 },
      'zero length produces zero vector'
    )

    t.end()
  })
}
