const dir3 = require('../../lib/dir3')
const PI = Math.PI
const hPI = PI / 2

module.exports = (ts) => {
  ts.test('case: to spherical angles', (t) => {
    t.deepEqual(
      dir3.toSpherical({ x: -1, y: 0, z: 0 }),
      { theta: PI, phi: hPI },
      'z+180deg'
    )

    t.deepEqual(
      dir3.toSpherical({ x: 0, y: 0, z: 1 }),
      { theta: 0, phi: 0 },
      'arbitrary theta to zero when z=1'
    )

    t.deepEqual(
      dir3.toSpherical({ x: 0, y: 0, z: -1 }),
      { theta: 0, phi: PI },
      'arbitrary theta to zero when z=-1'
    )

    t.deepEqual(
      dir3.toSpherical({ x: 0, y: 1, z: 0 }),
      { theta: hPI, phi: hPI },
      'z+90deg y+90deg'
    )

    t.end()
  })
}
