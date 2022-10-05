const dir3 = require('../../lib/dir3')
const PI = Math.PI
const hPI = PI / 2

module.exports = (ts) => {
  ts.test('case: from spherical angles', (t) => {
    t.almostEqual(
      dir3.fromSpherical(PI, hPI),
      { x: -1, y: 0, z: 0 },
      'only rot z'
    )

    t.almostEqual(
      dir3.fromSpherical(0, 0),
      { x: 0, y: 0, z: 1 },
      'at zenith'
    )

    t.almostEqual(
      dir3.fromSpherical(0, PI),
      { x: 0, y: 0, z: -1 },
      'at nadir'
    )

    t.almostEqual(
      dir3.fromSpherical(hPI, hPI),
      { x: 0, y: 1, z: 0 },
      'z+90deg y+90deg'
    )

    t.end()
  })
}
