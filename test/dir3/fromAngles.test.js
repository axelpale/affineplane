const dir3 = require('../../lib/dir3')
const PI = Math.PI
const hPI = PI / 2

module.exports = (ts) => {
  ts.test('case: basic spherical angles', (t) => {
    t.almostEqual(
      dir3.fromAngles(PI),
      { x: -1, y: 0, z: 0 },
      'only rot z'
    )

    t.almostEqual(
      dir3.fromAngles(PI, PI),
      { x: -1, y: 0, z: 0 },
      'rot z + rot x'
    )

    t.almostEqual(
      dir3.fromAngles(PI, PI, PI),
      { x: 1, y: 0, z: 0 },
      'rot z + rot x + rot y'
    )

    t.almostEqual(
      dir3.fromAngles(hPI, hPI, hPI),
      { x: 1, y: 0, z: 0 },
      'all +90 degrees'
    )

    t.almostEqual(
      dir3.fromAngles(hPI, hPI, PI),
      { x: 0, y: 0, z: -1 },
      'z+90deg x+90deg y+180deg'
    )

    t.end()
  })
}
