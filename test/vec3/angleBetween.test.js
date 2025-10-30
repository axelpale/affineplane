const affineplane = require('../../index')
const vec3 = affineplane.vec3

module.exports = (ts) => {
  ts.test('case: basic angleBetween', (t) => {
    t.almostEqual(
      vec3.angleBetween(
        { x: 0, y: 0, z: 0 },
        { x: 0, y: 0, z: 0 }
      ),
      0,
      'angle diff between zero vectors'
    )

    t.almostEqual(
      vec3.angleBetween(
        { x: 0, y: 0, z: 0 },
        { x: 1, y: 1, z: 1 }
      ),
      0,
      'angle diff with a zero vector'
    )

    t.almostEqual(
      vec3.angleBetween(
        { x: 1, y: 0, z: 0 },
        { x: 0, y: 1, z: 0 }
      ),
      Math.PI / 2,
      'right angle between x,y'
    )

    t.almostEqual(
      vec3.angleBetween(
        { x: 0, y: 0, z: 1 },
        { x: 0, y: 1, z: 0 }
      ),
      Math.PI / 2,
      'right angle between y,z'
    )

    t.almostEqual(
      vec3.angleBetween(
        { x: 0, y: 1, z: 0 },
        { x: 1, y: 0, z: 0 }
      ),
      Math.PI / 2,
      'vector order does not matter'
    )

    t.almostEqual(
      vec3.angleBetween(
        { x: 1, y: 0, z: -2 },
        { x: -1, y: 0, z: 2 }
      ),
      Math.PI,
      'full 180 deg angle for opposites'
    )

    t.end()
  })
}
